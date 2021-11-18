import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button as NavButton } from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const BackButton = ({
  label = 'Back',
  classname = '',
  icon = defaultIcon,
  handleBack = f => f,
  ...props
}) => {
  return (
    <NavButton
      label={label}
      onClick={handleBack}
      className={clsx('direction', classname)}
      {...(props as any)}
    >
      {icon}
    </NavButton>
  );
};

const defaultIcon = <ArrowBackIcon />;

BackButton.propTypes = {
  label: PropTypes.string,
  classname: PropTypes.string,
  icon: PropTypes.element,
  handleBack: PropTypes.func,
};
