import React from 'react';
import { Logout, UserMenu } from 'react-admin';

export const ProfileMenu = props => <UserMenu {...props} logout={<Logout button />} />
