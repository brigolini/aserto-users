import {fetchUserPage, usersQuery} from '../api';
import {User} from '../api/Models';
import {useQuery} from 'react-query';

interface UserPage {
  results: User[];
  page: { next_token: string, result_size: string, total_size: string }
}
export const useUsersPagenable = (pageSize:number, page?:string) => {
  return useQuery<UserPage>(usersQuery(pageSize,page),()=>fetchUserPage(pageSize, page))
}
