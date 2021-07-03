import { useParams } from "react-router-dom";

const UserList = () => {
  const {token} = useParams<{ token:string }>();
  return  <div className="bg-green-100">hey there{" "}{token}</div>
};

export default UserList;
