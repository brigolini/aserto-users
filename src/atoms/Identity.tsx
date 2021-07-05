import React from 'react';
import FormUnit from './Form/FormUnit';


interface Props {
  value: string;
  type: any;
  provider: any;
  verified: any;
}

const Identity: React.FC<Props> = (
  {
    value,
    type,
    provider,
    verified
  }) => (
  <div className="rounded-md bg-green-700 ml-4 mb-4 p-1">
    <FormUnit direction={"col"}>
      <div>{type} : {value}</div>
      <div>Provider: {provider}</div>
      {verified ? <div>Verified</div> : null}
    </FormUnit>
  </div>
)
export default Identity;
