import React from 'react';
import { Show, ShowProps } from 'react-admin';
import { Box, Card, CardContent, Divider, List, ListItem, Typography } from '@material-ui/core';

import Aside from './Aside';

const NoElement = () => null; // remove this to show "edit"

const CustomerShow: React.FC<ShowProps> = props => {
  return (
    <Show aside={<Aside />} actions={<NoElement />} component="div" {...props}>
      <CustomerDetails {...props} />
    </Show>
  );
};

const CustomerDetails = (props: any) => {
  const { record } = props;

  return (
    <Card>
      <CardContent>
        <ItemIterator data={record.item_list} />
      </CardContent>
    </Card>
  );
};

const ItemIterator = ({ data }: { data: [] }) => {

  if (data && data.length === 0) return null;

  return (
    <Box ml={8} width="84%">

      <Typography variant="h6">Item details</Typography>
      <Divider />

      <List>
        {data && data.map(( item, i ) =>
          <ListItem key={i} disableGutters>
            <Box width="100%">
              <Typography variant="body1">{item[0]}</Typography>
              <Typography variant="body1" color="textSecondary">Qty. {item[1]}</Typography><br/>
              <Divider />
            </Box>
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default CustomerShow;
