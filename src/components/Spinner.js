import React from 'react'
import Loding from './Loading.gif'
const Spinner=()=> {
    return (
      <div className='text-center my-3 md-3'>
        <img src={Loding} alt="" />
      </div>
    )
}

export default Spinner;
