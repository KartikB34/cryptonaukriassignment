import React from 'react'
import logo from '../assets/logo.png'
import comma from '../assets/comma.png'
import tick from '../assets/tick.png'
import closing from '../assets/closing.png'
import './LeftDiv.css'

const LeftDiv = () => {
  return (
    <div className='container'>

        <div className="logo">
            <img src={logo} alt="logo" />
            <p>Oasis.</p>
        </div>

        <div className='content'>

            <img src={comma} alt="comma" />
            <p>
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
            </p>

            <div className='author'>
                <p>Vincent Obi</p>
                <img src={tick} alt="tick" />
            </div>

            <div className="closing">
                <img src={closing} alt="closing" />
            </div>
            
        </div>

    </div>
  )
}

export default LeftDiv