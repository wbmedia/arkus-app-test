import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';

export default function UserForm({
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
          name='first_name'
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
          name='last_name'
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
          name='email'
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
          name='password'
          required
          onChange={(e) => setAvatar(e.target.value)}
          value={avatar}
        />
      </Form.Group>
    </Fragment>
  );
}
