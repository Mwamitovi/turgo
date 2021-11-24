import React from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CoreLayoutProps, Notification, Error } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import { AppContext } from '../context';
import CustomAppBar from './AppBar';

class Layout extends React.Component<LayoutProps, LayoutState> {
  static contextType = AppContext;

  state: LayoutState = {
    isList: false,
    hasError: false,
    errorMessage: undefined,
    errorInfo: undefined,
  };

  constructor(props: any) {
    super(props);
    /**
     * Reset the error state upon navigation
     * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
     */
    props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  // componentDidMount() {
  //   const app = this.context;
  //   this.setState({ ...this.state, isList: app.isList });
  // }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      errorMessage: error,
      errorInfo,
    });
  }

  render() {
    const { theme, title, children } = this.props;
    const { hasError, errorMessage, errorInfo } = this.state;

    return (
      // @ts-ignore
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <CustomAppBar />
        <Container>
          <main id="main-content">
            {hasError ? (
              <Error
                error={errorMessage as Error}
                errorInfo={errorInfo}
                title={title as string}
              />
            ) : (
              children
            )}
          </main>
        </Container>
        <Notification />
      </ThemeProvider>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    title: PropTypes.node.isRequired,
  };
}

export interface LayoutProps
  extends CoreLayoutProps,
    Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'title'>,
    // @ts-ignore
    RouteComponentProps {}

export interface LayoutState {
  isList: boolean,
  hasError: boolean;
  errorMessage?: Error;
  errorInfo?: React.ErrorInfo;
}

// @ts-ignore
export default withRouter(Layout);
