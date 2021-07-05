import { useParams} from "react-router-dom";
import UsersPagenable from '../../molecules/UsersPagenable/UsersPagenable';
import React from 'react';

const UserList = () => {
  const {token} = useParams<{ token: string }>();
  return (
      <div><UsersPagenable page={token} pageSize={10} /></div>
  )
};

export default UserList;
