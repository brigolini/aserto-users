import React from 'react';
import {useUsersPagenable} from '../../lib/UseUsersPagenable';
import Spinner from '../../atoms/Spinner';
import UserItem from '../UserItem';
import {useHistory} from 'react-router-dom';
import Button from '../../atoms/Button';


interface Props {
  page?: string;
  pageSize: number;
}

const UsersPagenable: React.FC<Props> =
  ({pageSize, page}) => {
    const {isLoading, data} = useUsersPagenable(pageSize, page);
    const history = useHistory();
    return (
      <>
        <Spinner visible={isLoading}/>
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-around">
            {data ? data.results.map((user) => <UserItem user={user}/>) : null}
          </div>
          <div className="flex w-72 mx-auto justify-around">
            {page ?
              <div className="pt-12 w-48">
                <Button onClick={() => history.goBack()}>Previous Page</Button>
              </div>
              : null
            }
            <div className="pt-12 pl-2 w-48">
              <Button onClick={() => history.push(
                `/users/${data ? data.page.next_token : ""}`)}>Next Page</Button>
            </div>
          </div>
        </div>
      </>
    )
  }
export default UsersPagenable;
