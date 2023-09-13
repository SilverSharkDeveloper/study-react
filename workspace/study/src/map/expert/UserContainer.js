import React, { useState } from 'react';
import Users from './Users';

import { useAsync } from 'react-async';

async function getUsers(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}



const UserContainer = () => {


console.log(useAsync({promiseFn: getUsers}));
const {value:users, isResolved} = useAsync({promiseFn: getUsers});



  return <>
    {isResolved && <Users users={users} />}
  </>;
};

export default UserContainer;
