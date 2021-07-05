import React from 'react';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import {User} from '../../api/Models';
import FormBody from '../../atoms/Form/FormBody';
import FormUnit from '../../atoms/Form/FormUnit';
import Picture from '../../atoms/Picture';
import Identity from '../../atoms/Identity';
import useUserDetails, {createIdentityArray} from '../../lib/UseUserDetails';
import {isoToUSFormat} from '../../lib/DateHelpers';
import UserLink from '../../atoms/UserLink';
import Button from '../../atoms/Button';

type RouteParams = {
  userId: string;
};

type LocationState = {
  user: User;
};

const UserDetails: React.FC<RouteComponentProps<RouteParams, {}, LocationState>> = ({location, match}) => {
  const {isLoading, user} = useUserDetails(location.state? location.state.user: undefined, match.params.userId);
  const history = useHistory();
  if (isLoading || !user) return null;
  const identities = createIdentityArray(user);
  return (
    <>
      <FormBody>
        <FormUnit direction="col">
          <div className="text-center">User Details</div>
          <div className="self-center py-4"><Picture url={user.picture} size="big"/></div>
          <div>
            <FormUnit direction="row">
              <FormUnit direction="col" padding="pr-8">
                <div>Name: {user.display_name}</div>
                <div>Enabled? {user.enabled ? "Yes" : "No"}</div>
                <div>Email: {user.email}</div>
                <div className="pt-4">Departament: {user.attr.department}</div>
                <div className="flex">Manager: {<UserLink userId={user.attr.manager} />}</div>
                <div>Title: {user.attr.title}</div>
                <div className="py-4 font-bold text-yellow-200">Applications</div>
                <FormUnit direction="row">Roles:
                  {user.applications["*"].roles.map((role:any) => <div
                    className="rounded px-2 ml-1 bg-yellow-500">{role}</div>)}
                </FormUnit>
                <div className="pt-4 font-bold text-yellow-200">Metadata</div>
                <div>Created:{isoToUSFormat(user.metadata.created_at)}</div>
                <div>Updated:{isoToUSFormat(user.metadata.updated_at)}</div>
              </FormUnit>
              <FormUnit direction="col">
                {identities.map((identity: any) => <Identity value={identity.key} type={identity.value.type}
                                                             provider={identity.value.provider}
                                                             verified={identity.value.verified}/>)}
              </FormUnit>
            </FormUnit>
            <div className="pt-1"><Button onClick={() => history.push("/users")}>Back to List</Button></div>
          </div>
        </FormUnit>
      </FormBody>
    </>
  );
}
export default UserDetails
