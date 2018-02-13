import React from 'react';

export const PageNotFound = ({ location }) => (
  <div>
    <h2>Page Not Found</h2>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
