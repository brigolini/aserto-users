import Loader from 'react-loader-spinner';
import React from 'react';

const Spinner:React.FC<{visible:boolean}> = ({visible})=>(
  visible?
  <div className="fixed m-auto">
  <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
  </div>
    :
    null
)
export default Spinner;
