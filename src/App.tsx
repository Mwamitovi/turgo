import React from 'react';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Admin, fetchUtils, Resource } from 'react-admin';

import customRoutes from 'routes';
import englishMessages from 'i18n/en';
import authProvider from 'authProvider';
import { drfProvider } from 'dataProvider';
import { BASE_URL, customers } from 'modules';
import { Login, Layout, Theme } from 'layout';

import { AppContext, State } from 'context';

const i18nProvider = polyglotI18nProvider(() => { 
  return englishMessages; // Always show english
}, 'en');

 /*@ts-ignore*/
const App = () => {
  const [dataProvider, setDataProvider] = React.useState<null | any>(null);
  // was meant to style layout bsed on list-display
  const [state, setState] = React.useState<State>({ isList: false });

  const fetchDataProvider = async () => {
    const httpClient = (url: string, options: { headers: any }): any => {
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = sessionStorage.getItem('accessToken');
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

  const contextProps = {
    isList: state.isList,
    setState: setState,
  };

  return (
    <AppContext.Provider value={{ ...contextProps }}>
      <Admin
        title=""
        theme={Theme}
        layout={Layout}
        loginPage={Login}
        dataProvider={dataProvider}
        customRoutes={customRoutes}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        disableTelemetry
      >
        <Resource name="customers" {...customers} />
      </Admin>
    </AppContext.Provider>
  );
};

export default App;
