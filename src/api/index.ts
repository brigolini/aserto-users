export const usersQuery = (pageSize:number,page?:string)=> `users-${pageSize}-${page}`;
export const fetchUserPage = (pageSize:number,page?:string)=>
  fetch(`https://onebox.demo.aserto.com/api/v1/dir/users?page.size=${pageSize}&page.token=${page}`).then(response=>response.json())


export const userQuery = (id:string)=> `user-${id}`;
export const fetchUser = (id:string)=>
  fetch(`https://onebox.demo.aserto.com/api/v1/dir/users/${id}`).then(response=>response.json())
