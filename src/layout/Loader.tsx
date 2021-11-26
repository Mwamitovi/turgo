import React from 'react';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box } from '@material-ui/core';

interface Props {
  title: string,
  top?: boolean,
  bottom?: boolean,
}

const useStyles = makeStyles(theme => ({
  card: {
    border: 'none',
    display: 'flex',
    minHeight: '420px',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: 'none !important',
    backgroundColor: 'transparent',
  },
  st: {
    marginTop: '72px',
    minHeight: 'unset',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  sb: {
    marginBottom: '250px',
  },
  fade: {
    color: 'rgba(0, 0, 0, 0.1)',
  },
  description: {
    fontSize: '100%',
    fontWeight: 400,
    marginTop: '2.5px',
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

const Loader: React.FC<Props> = ({ title, top=false, bottom=false }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, { [classes.st]: top, [classes.sb]: bottom })}>
      <CircularProgress className={classes.fade} />
      <Box className={classes.description}>{title}</Box>
    </Card>
  );
};

export default Loader;