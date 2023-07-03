import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import time from"./time.js";
export default function Cards() {
  return (
    <div>
    <Card>
    <Image src={time} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Time Saving</Card.Header>
      
      <Card.Description>
        You save your valuable time
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
    </Card.Content>
  </Card>
    </div>
  )
}
