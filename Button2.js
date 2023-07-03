import React from 'react'
import { Button,Icon} from 'semantic-ui-react'
export default function Button2() {
  return(
    <Button animated>
    <Button.Content visible><p>Our Mission</p></Button.Content>
    <Button.Content hidden>
      <Icon name='arrow right' />
    </Button.Content>
  </Button>
   
  )
}
