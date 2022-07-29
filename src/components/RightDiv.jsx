import React from 'react'
import './RightDiv.css'
import Card from './Card'
import { Link } from 'react-router-dom'

import user from '../assets/user.png'
import business from '../assets/business.png'

const RightDiv = () => {

    const LinkStyle = {
        textDecoration: 'none',
        color: 'black',
    }
    
  return (
    <div className='main-div'>

     <div className="sign-in">
        <p>Already have an account?</p>
        <a href='https://www.google.com'>Sign In</a>
     </div>


     <div className="main-content">

        <div className="upper-text">
          <h2>Join Us!</h2>
          <p>To begin this journey, tell us what type of account you’d be opening.</p>
        </div>

        <Link to="/first" style={LinkStyle}>
          <Card 
            image={user}
            title='Individual'
            para='Personal account to manage all you activities.'
            />
        </Link>

        <Card 
          image={business}
          title='Business'
          para='Own or belong to a company, this is for you.'
        />

     </div>

    </div>
  )
}

export default RightDiv