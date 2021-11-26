import React from 'react';
import clsx from 'clsx';
import isAfter from 'date-fns/isAfter';
import { TextField, DateField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider } from '@material-ui/core';

import { Loader } from 'layout';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '1rem',
  },
  overdue: {
    color: '#df1f26',
  }
}));

const Aside: React.FC<any> = ({ record }) => {
  const classes = useStyles();

  if (!record) return null;

  // check if "next payment date" is late or not!
  const overduePayment = isAfter(new Date(), new Date(record['next_payment_date']));

  return (
  <Box ml={4} width={250} minWidth={250}>

    <Typography variant="h6">Customer details</Typography>
    <Divider />

    {record.customer_name
      // if we have "customer name", then customer-data is loaded otherwise show "loader"
      ? <>
          <Box mt={2}>
            <Typography variant="body1" color="textSecondary" component="span">
              Name:&nbsp;
            </Typography>
            <TextField className={classes.root} source="customer_name" />{' '}
          </Box>

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Age:&nbsp;
            </Typography>
            <TextField className={classes.root} source="age" />{' '}
            <Typography variant="body1" color="textSecondary" component="span">
              &nbsp;&nbsp;Gender:&nbsp;
            </Typography>
            <TextField className={classes.root} source="gender" />{' '}
          </Box>

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              County:&nbsp;
            </Typography>
            <TextField className={classes.root} source="county" />{' '}
          </Box>

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              District:&nbsp;
            </Typography>
            <TextField className={classes.root} source="district" />{' '}
          </Box>

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Phone number:&nbsp;
            </Typography>
            <TextField className={classes.root} source="phone_number1" />{' '}
          </Box>

          {record.phone_number2 &&
            <Box mt={1}>
              <Typography variant="body1" color="textSecondary" component="span">
                Other number:&nbsp;
              </Typography>
              <TextField className={classes.root} source="phone_number1" />{' '}
            </Box>}

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Occupation:&nbsp;
            </Typography>
            <TextField className={classes.root} source="occupation" />{' '}
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Financials</Typography>
          </Box>    
          <Divider />

          <Box mt={2}>
            <Typography variant="body1" color="textSecondary" component="span">
              Account ID:&nbsp;
            </Typography>
            <TextField className={classes.root} source="account_id" />{' '}
          </Box>
          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Loan ID:&nbsp;...
            </Typography>
            <TextField className={classes.root} source="loan_id" />{' '}
          </Box>

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Loan status:&nbsp;
            </Typography>
            {record.amount_remaining > 0
              ? <span className={classes.root}>Ongoing</span>
              : <span className={classes.root}>Completed</span>}
          </Box>
          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Loan total:&nbsp;
            </Typography>
            <span className={classes.root}>Ush.{record.amount_remaining + record.amount_paid}</span>
          </Box>
          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Loan balance:&nbsp;
            </Typography>
            <span className={classes.root}>Ush.</span>
            <TextField className={classes.root} source="amount_remaining" />{' '}
          </Box>
          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              Amount paid:&nbsp;
            </Typography>
            <span className={classes.root}>Ush.</span>
            <TextField className={classes.root} source="amount_paid" />{' '}
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Payment details</Typography>
          </Box>    
          <Divider />

          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              {record.amount_remaining > 0 ? "Last payment date:" : "Prior payment date:"}&nbsp;
            </Typography>
            {record.last_payment_date // show now, if we have "null"
              ? <DateField
                  source="last_payment_date"
                  className={classes.root}
                  options={{ year: 'numeric', month: 'short', day: 'numeric' }}
                />
              : <span className={classes.root}>None</span>}
          </Box>
          <Box mt={1}>
            <Typography variant="body1" color="textSecondary" component="span">
              {record.amount_remaining > 0 ? "Next payment date:" : "Final payment date:"}&nbsp;
            </Typography>
            {record.next_payment_date // show now, if we have "null"
              ? <DateField
                  source="next_payment_date"
                  className={clsx(classes.root, {
                    // Highlight the "overdue-date" as "red" if there's pending balance
                    [classes.overdue]: overduePayment && record.amount_remaining > 0
                  })}
                  options={{ year: 'numeric', month: 'short', day: 'numeric' }}
                />
              : <span className={classes.root}>None</span>}
          </Box>
        </>
      : <Loader title="loading customer data..."/>}

  </Box>
  );
};

export default Aside;
