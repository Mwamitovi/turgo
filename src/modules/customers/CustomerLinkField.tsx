import React from 'react';
import { Link, FieldProps } from 'react-admin';

import FullNameField from './FullNameField';
import { Customer } from 'types';

const CustomerLinkField: React.FC<FieldProps<Customer>> = props =>
  props.record ? (
    <Link to={`/customers/${props.record.id}`}>
      <FullNameField {...props} />
    </Link>
  ) : null;

CustomerLinkField.defaultProps = {
  source: 'customer_id',
  addLabel: true,
};

export default CustomerLinkField;
