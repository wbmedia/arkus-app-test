import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from './../actions/users.actions';

export default function useUserDetails() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function addUser() {
    if (first_name && last_name && email && avatar) {
      dispatch(
        postUser({
          first_name,
          last_name,
          email,
          avatar,
        })
      );

      setFirstName('');
      setLastName('');
      setEmail('');
      setAvatar('');
      setError(null);
    } else {
      setError('All Fields are requied');
    }
  }
  return {
    first_name,
    setFirstName,
    last_name,
    setLastName,
    email,
    setEmail,
    avatar,
    setAvatar,
    error,
    setError,
    addUser,
    open,
    setOpen,
  };
}
