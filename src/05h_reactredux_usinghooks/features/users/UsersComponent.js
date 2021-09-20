import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addUser } from './usersSlice';
import { UserForm }  from './UserForm';

export const UsersComponent = ({heading}) => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  return (
    <div>
      <h1>{heading}</h1>
      <UserForm onAddUser={(user) => dispatch(addUser(user))} />
      <ul>
        {users.map(user =>
          <li key={user.id}> {user.name}, {user.location} </li>
        )}
      </ul>
    </div>
  )
}
