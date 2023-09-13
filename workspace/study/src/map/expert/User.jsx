import React from 'react';

const User = ({ user }) => {
  const divStyle = {
    fontSize: '16px',
  };
  return (
    <li>    
      <div>
        {user.id}:{user.name}
      </div>
      <div style={divStyle}>{user.address.zipcode}</div>
    </li>
  );
};

export default User;
