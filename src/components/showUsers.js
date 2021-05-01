import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './../actions/users.actions';
import Buttons from './buttons';

const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);
  const { loading, error, users } = usersData;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <div className='row'>
        {loading
          ? 'Loading...'
          : error
          ? error.message
          : users.length > 0 &&
            users.map((u) => (
              <div className='column' key={u.id}>
                <div className='App__box'>
                  <img
                    className='App__img'
                    src={u.avatar}
                    alt={`${u.first_name} ${u.last_name} Avatar`}
                  />
                  <p>
                    {u.first_name} {u.last_name}
                  </p>
                  <p className='App__email'>{u.email}</p>
                  <Buttons />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Users;
