import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import wider from"./wider.js";
export default function Cards2() {
  return (
    <div>
    <Card>
    <Image src={wider} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Wider Reach</Card.Header>
      
      <Card.Description>
        You reach out to well qualified applicants
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
    </Card.Content>
  </Card>
    </div>
  )
}
