import React from 'react';
import PropTypes from "prop-types";

export const userInfo = ({ Email, Name }) => {
  return (
    <>
      <h3> User Information</h3>
      <p>Username: {Name}</p>
      <p>Email: {Email}</p>
    </>
  );
};

userInfo.prototype = {
  Name: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired
};