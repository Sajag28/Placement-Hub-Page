import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import collaboration from "./collaboration.js";
export default function Cards3() {
  return (
    <div>
    <Card>
    <Image src={collaboration} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Enhanced Collaboration</Card.Header>
      
      <Card.Description>
        More you collaborate, better you can conclude
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
    </Card.Content>
  </Card>
    </div>
  )
}
