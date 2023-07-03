import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
export default function Button1() {
  return (

    <Button animated>
    <Button.Content visible><p>Reach Us</p></Button.Content>
    <Button.Content hidden>
      <Icon name='arrow right' />
    </Button.Content>
  </Button>
    
  )
}
