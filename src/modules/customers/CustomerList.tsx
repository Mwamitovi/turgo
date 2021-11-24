import React from 'react';
import {
  List,
  Datagrid,
  ListProps,
  SearchInput,
} from 'react-admin';
import AccountsField from './AccountsField';
import CustomerLinkField from './CustomerLinkField';

const CustomerFilters = [
  <SearchInput source="q" alwaysOn />,
];

const CustomerList: React.FC<ListProps> = props => {
  return (
    <List
      {...props}
      perPage={25}
      filters={CustomerFilters}
      sort={{ field: 'last_seen', order: 'DESC' }}
    >
      <Datagrid optimized rowClick="edit">
        <CustomerLinkField />
        <AccountsField />
      </Datagrid>
    </List>
  );
};

export default CustomerList;
