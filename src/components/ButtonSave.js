import React from 'react';
import { Button } from 'semantic-ui-react';

export default function ButtonSave({ addUser }) {
  return (
    <Button className='mt-3' onClick={() => addUser()}>
      Save
    </Button>
  );
}
