import * as React from 'react';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Admin, fetchUtils, Resource, ListGuesser } from 'react-admin';

// import { theme } from 'layout/themes';
import customRoutes from 'routes';
import englishMessages from 'i18n/en';
import authProvider from 'authProvider';
import { Login, Layout, Theme } from 'layout';
import dataProviderFactory, { drfProvider } from 'dataProvider'; // eslint-disable-line
import { BASE_URL, products, customers, categories } from 'modules';

import { AppContext } from 'context';

const i18nProvider = polyglotI18nProvider(() => { 
  return englishMessages; // Always show english
}, 'en');

 /*@ts-ignore*/
const App = () => {
  const [dataProvider, setDataProvider] = React.useState<null | any>(null);

  const fetchDataProvider = async () => {
    const httpClient = (url: string, options: { headers: any }): any => {
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = sessionStorage.getItem('token');
      options.headers.set('Authorization', `Bearer ${token}`);
      return fetchUtils.fetchJson(url, options);
    };

    // @ts-ignore
    let dataProviderInstance = await drfProvider(BASE_URL, httpClient);

    setDataProvider(
      // NOTE: dataProviderInstance can be a function
      () => dataProviderInstance
    );
  };

  React.useEffect(() => {
    fetchDataProvider();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!dataProvider) {
    return (
      <div className="loader-container">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const contextProps = {};

  return (
    <AppContext.Provider value={{ ...contextProps }}>
      <Admin
        title=""
        // dataProvider={dataProvider}
        dataProvider={dataProviderFactory(
          process.env.REACT_APP_DATA_PROVIDER || ''
        )}
        customRoutes={customRoutes}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        loginPage={Login}
        layout={Layout}
        theme={Theme}
        disableTelemetry
      >
        <Resource name="customers" {...customers} />
        <Resource name="products" {...products} />
        <Resource name="categories" {...categories} />
        <Resource name="tags" list={ListGuesser} />
      </Admin>
    </AppContext.Provider>
  );
};

export default App;
