import * as React from 'react';
import { IconButton, Badge, BadgeProps, styled } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid rgb(255, 255, 255)`,
    padding: '0 4px',
    height: '22px',
    fontSize: '0.95rem',
    fontWeight: 600,
  },
}));

const defaultIcon = <ShoppingCartIcon />;

const CartButton: React.FC<Props> = ({
  icon = defaultIcon,
  onClick,
  index = 0,
  value,
}) => {
  const handleClick = React.useCallback(
    event => {
      event.preventDefault();
      if (typeof onClick === 'function') {
        onClick(event);
      }
    },
    [onClick]
  );

  return (
    <IconButton aria-label="cart" tabIndex={index} onClick={handleClick}>
      <StyledBadge badgeContent={value} color="secondary">
        {icon}
      </StyledBadge>
    </IconButton>
  );
};

interface Props {
  value: number;
  index?: number;
  className?: string;
  icon?: React.ReactElement | null;
  onClick?: (e: React.MouseEvent) => void;
}

export default CartButton;
