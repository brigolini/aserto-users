import {User} from '../api/Models';
import React from 'react';
import Picture from "../atoms/Picture";
import {useHistory} from 'react-router-dom';

interface Props {
  user: User;
}
const UserItem:React.FC<Props> = ({user}) => {
  const history = useHistory();
  return (<div
            role="button"
            className={`cursor-pointer max-w-lg rounded-sm ${user.enabled?`bg-gray-700 hover:bg-green-700`:`bg-gray-200`} w-36 text-white flex flex-col justify-around items-center p-4 mb-4 ml-1`}
            onClick={()=>history.push({pathname: `/user/${user.id}`, state: {user: user}})}
          >
    <Picture url={user.picture} size="small"/>
    <div className="font-bold text-center">{user.display_name}</div>
  </div>)
}
export default UserItem;
