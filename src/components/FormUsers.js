import React from 'react';
import { Form } from 'semantic-ui-react';
import userForm from './userForm';

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
  } = useUserDetails();
  return (
    <div>
      <Form>
        <userForm
          first_name={first_name}
          last_name={last_name}
          email={email}
          avatar={avatar}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setAvatar={setAvatar}
        />
      </Form>
    </div>
  );
}
