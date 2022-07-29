import React, {useState} from 'react'
import './Card.css'
import Box from '@mui/material/Box'
// import { Shadows } from '@mui/system'

import arrow from '../assets/arrow.png'

const Card = ({image,title,para}) => {

    const BoxStyles = {
        boxShadow: 1,
        border: 1,
        borderColor:"white",

        '&:hover': {
            border: 1,
            boxShadow: 0,
            borderColor:"primary.main",
        }
    }

    const [hover, setHover] = useState(false)

    const HandleHover = () => {
        setHover(true)
    }

    const HandleNoHover = () => {
        setHover(false)
    }

  return (

    <Box className='card' sx={ BoxStyles } onMouseOver={HandleHover} onMouseOut={HandleNoHover} >
        <img src={image} alt='logo' />

        <div className="para">
            <h2>{title}</h2>
            <p>{para}</p>
        </div>

        <div className="arrow">
            {hover && (
              <img src={arrow} alt='arrow' />
            )}
        </div>

    </Box>
  )
}

export default Card