import {User} from '../api/Models';
import {useQuery} from 'react-query';
import {fetchUser, userQuery} from '../api';


export const createIdentityArray = (user:User) => {
  return Object.keys(user.identities).map((key) => {
    // @ts-ignore
    const value = user.identities[key];
    return {key, value}
  });
}
const useUserDetails = (user:User | undefined, userId:string)=>{
  const {isLoading, data} = useQuery(userQuery(userId),()=>fetchUser(userId),{enabled: !user});
  return {isLoading: user?isLoading : false, user: user?user: data ? data.result : null}
}

export default useUserDetails;
