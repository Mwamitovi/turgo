import React from 'react';
import clsx from 'clsx';
import { AppBar } from 'react-admin';
import { Link, useRouteMatch } from 'react-router-dom';
import { Tabs, Tab, Toolbar, Box, Typography } from '@material-ui/core';

import { ProfileMenu } from './ProfileMenu';

const CustomAppBar: React.FC<any> = props => {
  const match = useRouteMatch(['/commands', '/account', '/invoices', '/deals']);
  const currentPath = match?.path ?? '/';

  return (
    // @ts-ignore
    <AppBar
      {...props}
      elevation={1}
      color="primary"
      className={clsx('tweaked')}
      userMenu={<ProfileMenu />}
    >
      <Typography component="div" variant="h4" className={clsx('flex')}>
        turgo
      </Typography>
      <Toolbar variant="dense" className={clsx('flex')}>
        <Box>
          <Tabs value={currentPath} aria-label="Navigation Tabs">
            <Tab label={'Customers'} component={Link} to="/" value="/" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
