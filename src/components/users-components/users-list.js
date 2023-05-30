import React from 'react'
import UserListItem from './user-list-item'

const UsersList = ({ filteredUsers }) => {
    return <ul>
        {filteredUsers?.map(user => {
            return <UserListItem user={user} />
        })}
    </ul>
}

export default UsersList
