import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LabelIcon from '@material-ui/icons/Label';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  ReduxState,
} from 'react-admin';

import visitors from '../modules/customers';
import products from '../modules/products';
import categories from '../modules/categories';
import SubMenu from './SubMenu';
import { AppState } from '../types';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu: React.FC = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });
  const translate = useTranslate();
  const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen);
  useSelector((state: AppState) => state.theme); // force rerender on theme change
  const classes = useStyles();

  const handleToggle = (menu: MenuName) => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.open]: open,
        [classes.closed]: !open,
      })}
    >
      {' '}
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle('menuCatalog')}
        isOpen={state.menuCatalog}
        name="pos.menu.catalog"
        icon={<products.icon />}
        dense={dense}
      >
        {/*@ts-ignore*/}
        <MenuItemLink
          to={{
            pathname: '/products',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.products.name`, {
            smart_count: 2,
          })}
          leftIcon={<products.icon />}
          dense={dense}
        />
        {/*@ts-ignore*/}
        <MenuItemLink
          to={{
            pathname: '/categories',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.categories.name`, {
            smart_count: 2,
          })}
          leftIcon={<categories.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuCustomers')}
        isOpen={state.menuCustomers}
        name="pos.menu.customers"
        icon={<visitors.icon />}
        dense={dense}
      >
        {/*@ts-ignore*/}
        <MenuItemLink
          to={{
            pathname: '/customers',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.customers.name`, {
            smart_count: 2,
          })}
          leftIcon={<visitors.icon />}
          dense={dense}
        />
        {/*@ts-ignore*/}
        <MenuItemLink
          to={{
            pathname: '/segments',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.segments.name`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  open: {
    width: 200,
  },
  closed: {
    width: 55,
  },
}));

export default Menu;
