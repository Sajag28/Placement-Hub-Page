import React from 'react'
import image from "./work.jpeg";
export default function Icon() {
  const style={
        borderRadius:"30px"
  
  }
  return (
    <div>
      <img src={image} alt="" height="80px" width="80px" style={style} />
    </div>
  )
}
