import React from 'react'
import { Message } from 'semantic-ui-react'

const NotLoggedInMessage = () => (
  <Message
    warning
    header='You must Login with you gmail account'
    content='To be able to see your EC2 instances'
    size='big'
  />
)

export default NotLoggedInMessage;