import React from 'react';
import { FieldProps } from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Customer } from 'types';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: -8,
    marginBottom: -8,
    justifyContent: 'center',
  },
  chip: {
    margin: 7.5,
    height: 27.5,
    fontSize: '0.95rem',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
});

const AccountsField: React.FC<FieldProps<Customer>> = props => {
  const classes = useStyles();
  const { record } = props;

	let userAccounts = record && record.accounts;

  if (!record) {
    return null;
  }

  return (
    <span className={classes.main}>
      {userAccounts && userAccounts.map((each, i) =>
        <Chip key={i} label={each} className={classes.chip} />
      )}
    </span>
  );
};

AccountsField.defaultProps = {
  label: 'Account(s)',
  textAlign: 'center',
};

export default AccountsField;