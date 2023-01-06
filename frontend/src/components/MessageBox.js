import React from 'react';
import { Alert } from 'react-bootstrap';

function MessageBox(prop) {
  return <Alert variant={prop.variant || 'info'}>{prop.children}</Alert>;
}

export default MessageBox;
