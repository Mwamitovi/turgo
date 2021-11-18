import React from 'react';
import clsx from 'clsx';
import { AppBar } from 'react-admin';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Toolbar, Box, Typography } from '@material-ui/core';

import { ProfileMenu } from './ProfileMenu';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

const CustomAppBar: React.FC = (props: any) => {
  const classes = useStyles(); // eslint-disable-line
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
            {/* <Tab
              label={'Customers'}
              component={Link}
              to="/account"
              value="/account"
            /> */}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
