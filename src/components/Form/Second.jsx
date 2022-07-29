import React from 'react'
import TopBlock from './TopBlock'
import './Second.css'
import { Link } from 'react-router-dom'

import CountryInput from './CountryInput'
import CountrySelector from './CountrySelector'

import lock from '../../assets/lock.png'

import 'antd/dist/antd.min.css';
import { Input, Button } from 'antd';

const Second = ({formdata,setFormdata}) => {

  const LinkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  const addressHandler = (event) => {
    setFormdata({...formdata, address: event.target.value})
  }

  return (
    <div className='first-container'>
      <TopBlock step={2} content="Residency Info." />

      <div className="first-content">
        <div className="first-text">
          <h2>Register Individual Account!</h2>
          <p>For the purpose of industry regulation, your details are required.</p>
        </div>

        <div className="input">

          <div className="input-div">
            <p>Phone Number</p>
            {/* <Input
              size="large"
              placeholder='Enter Your Phone Number'
            /> */}
            <CountryInput formdata={formdata} setFormdata={setFormdata}/>
          </div>

          <div className="input-div">
            <p>Your Address</p>
            <Input
              size="large"
              placeholder='Please enter address'
              value={formdata.address}
              onChange={addressHandler}
            />
          </div>

          <div className="input-div">
            <p>Country of residence</p>
            <CountrySelector formdata={formdata} setFormdata={setFormdata}/>
          </div>

          <Link to="/third" style={LinkStyle} >
          <div className="button">
            <Button type='primary' size='large'>Save & Continue</Button>
          </div>
          </Link>

          <div className="lock">
            <img src={lock} alt='lock' />
            <p>Your Info is safely secured</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Second