import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button as NavButton } from 'react-admin';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const NextButton = ({
  label,
  classname = '',
  icon = defaultIcon,
  handleNext = f => f,
  ...props
}) => {
  return (
    <NavButton
      label={label}
      onClick={handleNext}
      className={clsx('direction', classname)}
      {...(props as any)}
    >
      {icon}
    </NavButton>
  );
};

const defaultIcon = <ArrowForwardIcon />;

NextButton.propTypes = {
  label: PropTypes.string,
  handleNext: PropTypes.func,
};

export default NextButton;
