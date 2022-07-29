import React,{useState} from 'react'
import TopBlock from './TopBlock'
import './First.css'
import { Link } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import { Input, Checkbox, Button } from 'antd';

const First = ({formdata,setFormdata}) => {

  const LinkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  const nameHandler = (event) => {
    setFormdata({...formdata, name: event.target.value})
  }
  const emailHandler = (event) => {
    setFormdata({...formdata, email: event.target.value})
  }
  const passwordHandler = (event) => {
    setFormdata({...formdata, password: event.target.value})
  }

  const [checked,setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  }

  const uncheckedError = () => {
    "/"
    window.alert("Please agree on terms and conditions.");
  }


  return (
    <div className='first-container'>
      <TopBlock step={1} content="Personal Info." />

      <div className="first-content">
        <div className="first-text">
          <h2>Register Individual Account!</h2>
          <p>For the purpose of industry regulation, your details are required.</p>
        </div>

        <div className="input">

          <div className="input-div">
            <p>Your Fullname*</p>
            <Input
              size="large"
              placeholder='Enter Your Fullname'
              value={formdata.name}
              onChange={nameHandler}
            />
          </div>

          <div className="input-div">
            <p>Email Address*</p>
            <Input
              size="large"
              placeholder='Enter Email Address'
              type='email'
              value={formdata.email}
              onChange={emailHandler}
            />
          </div>

          <div className="input-div">
            <p>Create Password*</p>
            <Input.Password
              size="large"
              placeholder='Create Password'
              value={formdata.password}
              onChange={passwordHandler}
              // suffix={(visible) => (visible ? "Hide": "Show" )}
            />
          </div>

          <div className="terms">
            <Checkbox checked={checked} onChange={onChange} />
            <p>I agree to terms & conditions</p>
          </div>

          <Link to={checked? "/second" : {uncheckedError}} style={LinkStyle} >
          <div className="button">
            <Button type='primary' size='large'>Register Account</Button>
          </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default First