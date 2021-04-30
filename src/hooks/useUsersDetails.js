import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from './../actions/modal.actions';

function useUserDetails() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();

  function addUser() {
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
    addUser,
  };
}

export default useUserDetails;
