import React from 'react'
import image from "./freshteam-recruitment.png";
export default function Image2() {
    const style={
        borderRadius:"40px"
    }
  return (
    
    <div>
      <img src={image} alt="" height="320px" width="320px" style={style}/>
    </div>
  )
}
