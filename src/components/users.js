import React, { useState, useEffect } from 'react';
import UsersList from './users-components/users-list'
import UsersFilter from './users-components/users-filter';

export const Users = ({ users }) => {
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        setFilteredUsers(users)
    }, [users])

    return <div>
                <UsersList filteredUsers={filteredUsers} />
                <br/>
                <UsersFilter users={users} setFilteredUsers={setFilteredUsers} />
    </div>
}
