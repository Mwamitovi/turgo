import React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ListProps,
  // DateInput,
  // NullableBooleanInput,
  NumberField,
  SearchInput,
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MobileGrid from './MobileGrid';
import SegmentsField from './SegmentsField';
// import SegmentInput from './SegmentInput';
import CustomerLinkField from './CustomerLinkField';
import ColoredNumberField from './ColoredNumberField';
// import CustomerListAside from './CustomerListAside';

const CustomerFilters = [
  <SearchInput source="q" alwaysOn />,
  /** more filters
    <DateInput source="last_seen_gte" />, 
    <NullableBooleanInput source="has_ordered" />,
    <NullableBooleanInput source="has_newsletter" defaultValue />,
    <SegmentInput />,
  */
];

const useStyles = makeStyles(theme => ({
  nb_commands: { color: 'purple' },
  hiddenOnSmallScreens: {
    display: 'table-cell',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const CustomerList = (props: ListProps): React.ReactElement => {
  const classes = useStyles();
  const isXsmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('xs'));
  // const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));
  
  return (
    <List
      {...props}
      perPage={25}
      filters={CustomerFilters}
      // aside={<CustomerListAside />} expose more fitler options
      sort={{ field: 'last_seen', order: 'DESC' }}
    >
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid optimized rowClick="edit">
          <CustomerLinkField />
          <DateField source="last_seen" />
          <NumberField
            source="nb_commands"
            label="resources.customers.fields.commands"
            className={classes.nb_commands}
          />
          <ColoredNumberField
            source="total_spent"
            options={{ style: 'currency', currency: 'USD' }}
          />
          <DateField source="latest_purchase" showTime />
          <BooleanField source="has_newsletter" label="News." />
          <SegmentsField
            cellClassName={classes.hiddenOnSmallScreens}
            headerClassName={classes.hiddenOnSmallScreens}
          />
        </Datagrid>
      )}
    </List>
  );
};

export default CustomerList;
