import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, Container, Drawer } from '@material-ui/core';
import { CoreLayoutProps, Notification, Error } from 'react-admin';

import { AppContext } from '../context';
import CustomAppBar from './AppBar';

class Layout extends React.Component<LayoutProps, LayoutState> {
  static contextType = AppContext;

  state: LayoutState = {
    openCart: false,
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

  componentDidMount() {
    const app = this.context;
    this.setState({ ...this.state, openCart: app.openCart });
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      errorMessage: error,
      errorInfo,
    });
  }

  render() {
    const { theme, title, children } = this.props;
    const { hasError, errorMessage, errorInfo, openCart } = this.state;
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
          <Drawer
            variant="persistent"
            open={openCart as boolean}
            anchor="right"
            // onClose={handleClose}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
          >
            <div className={clsx('cart-dialog')}>cart</div>
          </Drawer>
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
  openCart: boolean;
  hasError: boolean;
  errorMessage?: Error;
  errorInfo?: React.ErrorInfo;
}

// @ts-ignore
export default withRouter(Layout);
