import React from 'react'
// import { Image } from 'semantic-ui-react'
import back from "./virtual interview tips.jpg"
export default function Image() {
  const style={
    borderRadius:"40px"
}
  return (
    <div>
    <img src={back} height="320px" width="320px" style={style}/>
    </div>
  )
}
