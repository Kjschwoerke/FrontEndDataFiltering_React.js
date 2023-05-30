import React from 'react'
import UserListItem from './user-list-item'

const UsersList = ({ users }) => {
    return <ul>
        {users?.map(user => {
            return <UserListItem user={user} />
        })}
    </ul>
}

export default UsersList
