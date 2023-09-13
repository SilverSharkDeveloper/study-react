import React from 'react';
import User from './User';

const Users = ({ users }) => {
  const userList = users.map((user) => <User key={user.id} user={user} />);
  return <ul>{userList}</ul>;
};

export default Users;
