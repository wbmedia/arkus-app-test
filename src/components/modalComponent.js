import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import FormUser from './FormUsers';

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div style={{ position: 'fixed', bottom: '10em', right: '5em' }}>
          <Button
            style={{
              backgroundColor: '#ff7979',
              color: 'white',
              borderRadius: 0,
            }}
            className='px-4 py-4  text-white m-1 bg-red-300 hover:bg-red-200 add-button absolute'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
          </Button>
        </div>
      }
    >
      <Modal.Header> Add New User</Modal.Header>
      <Modal.Content>
        <FormUser />
      </Modal.Content>
      <Modal.Actions>
        <Button
          style={{
            backgroundColor: '#ff7979',
            color: 'white',
            borderRadius: 0,
          }}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
