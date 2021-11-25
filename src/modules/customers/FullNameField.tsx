import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FieldProps } from 'react-admin';
import AvatarField from './AvatarField';
import { Customer } from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
    marginTop: -theme.spacing(0.5),
    marginBottom: -theme.spacing(0.5),
  },
}));

interface Props extends FieldProps<Customer> {
  size?: string;
}

const FullNameField: React.FC<Props> = props => {
  const classes = useStyles();
  const { record, size } = props;

  if (!record) return null;

  return (
    <div className={classes.root}>
      <AvatarField className={classes.avatar} record={record} size={size} />
      {record.first_name} {record.last_name}
    </div>
  );
};

FullNameField.defaultProps = {
  source: 'last_name',
  label: 'resources.customers.fields.name',
};

export default React.memo<Props>(FullNameField);
