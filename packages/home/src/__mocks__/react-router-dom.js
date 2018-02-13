import React from 'react';

// The tip to use thi comes from:
// https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303

const rrd = require('react-router-dom');

// Just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;

module.exports = rrd;
