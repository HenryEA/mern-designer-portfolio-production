import React from 'react';
import { useAppContext } from '../context/appContext';

const Logout = () => {
  const { logoutUser, user } = useAppContext();
  logoutUser();
};

export default Logout;

<li></li>;
