import React from 'react'
import image from "./searchjob.jpg";
export default function Image3() {
    const style={
        borderRadius:"40px"
    }
  return (
    <div>
      <img src={image} alt="" height="320px" width="320px" style={style}/>
    </div>
  )
}
