import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';

export default function userForm({
  first_name,
  last_name,
  email,
  avatar,
  setFirstName,
  setLastName,
  setEmail,
  setAvatar,
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          width={12}
          label='First Name'
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={12}
          label='Last Name'
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={12}
          label='Email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          width={12}
          label='Avatar'
          type='file'
          required
          onChange={(e) => setAvatar(e.target.value)}
          value={avatar}
        />
      </Form.Group>
    </Fragment>
  );
}
