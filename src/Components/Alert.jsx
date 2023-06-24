import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const NewAlert = ({ variant, text, setShowAlert }) => {

  const handleClose = () => {
    setShowAlert(false);
  };

  return  (
    <Alert variant={variant} onClose={handleClose} dismissible>
      {text}
    </Alert>
  ) ;
};

export default NewAlert;
