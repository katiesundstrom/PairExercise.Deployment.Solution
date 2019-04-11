import React from 'react';

// eslint-disable-next-line react/display-name
export default props => (
  <tr>
    <td className="user--first-name">{props.firstName}</td>
    <td className="user--last-name">{props.lastName}</td>
    <td className="user--email">{props.email}</td>
  </tr>
);
