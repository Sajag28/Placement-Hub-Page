import React from 'react'
import { Button,Icon} from 'semantic-ui-react'
export default function Button3() {
  return (
    <div>
    <Button animated>
    <Button.Content visible><p>Become Our Member</p></Button.Content>
    <Button.Content hidden>
      <Icon name='arrow right' />
    </Button.Content>
  </Button>
    </div>
  )
}
