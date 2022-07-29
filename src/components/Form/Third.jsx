import React from 'react'
import TopBlock from './TopBlock'
import './Third.css'

import 'antd/dist/antd.min.css';
import { Input, Button } from 'antd';

import tick from '../../assets/tick.png'
import lock from '../../assets/lock.png'

const Third = ({formdata,setFormdata}) => {

  const bvnHandler = (event) => {
    setFormdata({...formdata, bvn: event.target.value})
  }

  // const ico = (
  //   {tick}
  // )

  return (
    <div className='first-container'>
      <TopBlock step={3} content="Bank verification" />

      <div className="first-content">
        <div className="first-text">
          <h2>Register Individual Account!</h2>
          <p>For the purpose of industry regulation, your details are required.</p>
        </div>

        <div className="input">

          <div className="input-div_three">
            <p>Bank verification number (BVN)</p>
            <Input
              size="large"
              placeholder='Enter BVN'
              // suffix={{ico}}
              value={formdata.bvn}
              onChange={bvnHandler}
            />
          </div>

          <div className="button-three">
            <Button type='primary' size='large'>Save & Continue</Button>
          </div>

          <div className="lock">
            <img src={lock} alt='lock' />
            <p>Your Info is safely secured</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Third