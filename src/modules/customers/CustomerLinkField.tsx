import React from 'react';
import { Link, FieldProps } from 'react-admin';

import FullNameField from './FullNameField';
import { Customer } from 'types';

const CustomerLinkField: React.FC<FieldProps<Customer>> = props => {
  const { record, resource } = props;

  if (!record) return null;

  return (
    <Link to={`/${resource}/${record.id}`}>
      <FullNameField {...props} />
    </Link>
  );
}

CustomerLinkField.defaultProps = {
  source: 'customer_id',
  label: "Customer name"
};

export default CustomerLinkField;
