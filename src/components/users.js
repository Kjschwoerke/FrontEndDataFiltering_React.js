import React, { useState, useEffect } from 'react';
import UsersList from './users-components/users-list'

export const Users = ({ users }) => {
    const [filteredUsers, setFilteredUsers] = useState([])
    const [filterParam, setFilterParam] = useState('')
    const [filterName, setFilterName] = useState('show_all')

    const filterUsers = (e) => {
        e.preventDefault();
        if(filterName === "show_all") {
            setFilteredUsers(users)
            return
        }

        let filtered = [];

        users.forEach(user => {
            if (user[filterName] === filterParam) {
                filtered.push(user);
            }
        })
        setFilteredUsers(filtered)
    }

    useEffect(() => {
        setFilteredUsers(users)
    }, [users])

    return <div>
                <UsersList users={filteredUsers} />

                <br/>

                <form onSubmit={(e) => filterUsers(e)}>
                <label htmlFor='filter_name'>Filter Name: </label>
                <select id="filter_name" onChange={(e) => setFilterName(e.target.value)}>
                    <option value="show_all">None</option>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="gender">Gender</option>
                    <option value="department">Department</option>
                    <option values="salary">Salary</option>
                </select>

                <label htmlFor="filter_param_input">Filter Parameter:</label>
                <input 
                id="filter_param_input" 
                type="text" 
                value={filterParam} 
                placeholder="Filter Parameter"
                onChange={(e) => setFilterParam(e.target.value)}
                required = {filterName !== 'show_all'}
                />
                <input type="submit" value="Set Filter" />
                </form>
    </div>
}
