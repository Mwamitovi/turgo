import React from 'react';
import { Redirect } from 'react-router';

/**
 * Redirects because we don't have "edit" mode yet
 * But also helps avoid rendering a "list" at "/resource/:id"
 */
const CustomerEdit: React.FC = () => <Redirect to="/customers" />;

export default CustomerEdit;
