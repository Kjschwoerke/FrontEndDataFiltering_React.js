import React from 'react'

const UserListItem = ({ user }) => {
    return <li key={user.id}>
        <h2 key={`${user.id}-name`}>{user.first_name} {user.last_name}</h2>
        <ul key={`${user.id}-details`}>
            <li key={`${user.id}-age`}>Age: {user.age}</li>
            <li key={`${user.id}-gender`}>Gender: {user.gender}</li>
            <li key={`${user.id}-department`}>Department: {user.department}</li>
            <li key={`${user.id}-salary`}>Salary: {user.salary}</li>
        </ul>
    </li>
}

export default UserListItem
