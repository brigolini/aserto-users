import React from 'react';
import useUserDetails from '../lib/UseUserDetails';
import {useHistory} from 'react-router-dom';
import Button from './Button';

interface Props {
  userId : string
}
const UserLink:React.FC<Props> = ({userId}) => {
  const {isLoading, user} = useUserDetails(undefined, userId);
  const history = useHistory()
  if (isLoading || !user) return null;
  return (
    <div className="px-2 ml-2">
      <Button onClick={()=>history.push(`/user/${user.id}`)}>{user.display_name}</Button>
    </div>
  )
}

export default UserLink;
