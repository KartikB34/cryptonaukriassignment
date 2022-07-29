import React from 'react'
import './TopBlock.css'
import backicon from '../../assets/backicon.png'

import { Link } from 'react-router-dom'

const TopBlock = ({step, content}) => {

  const LinkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  const linkto = () => {
    if(step === 3){
      return "/second"
    } else if (step===2){
      return "/first"
    }
    else{
      return "/cryptonaukriassignment"
    }
  }

  return (
    <div className='top-container'>

      <Link to={linkto}  style={LinkStyle}>
      <div className="back">
         <img src={backicon} alt="back" />
         <p>Back</p>
      </div>
      </Link>

      <div className="step">
         <p>STEP 0{step}/03</p>
         <p2>{content}</p2>
      </div>

    </div>
  )
}

export default TopBlock
