import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import UserForm from './userForm';
import useUserDetails from './../hooks/useUsersDetails';

export default function FormUser() {
  const {
    first_name,
    setFirstName,
    last_name,
    setLastName,
    email,
    setEmail,
    avatar,
    setAvatar,
    addUser,
  } = useUserDetails();
  return (
    <div>
      <Form>
        <UserForm
          first_name={first_name}
          last_name={last_name}
          email={email}
          avatar={avatar}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setAvatar={setAvatar}
        />
        <Button
          style={{
            backgroundColor: '#ff7979',
            color: 'white',
            borderRadius: 0,
            right: '100px',
            bottom: '-86px',
            position: 'absolute',
          }}
          onClick={() => addUser()}
        >
          {' '}
          Save
        </Button>
      </Form>
    </div>
  );
}
