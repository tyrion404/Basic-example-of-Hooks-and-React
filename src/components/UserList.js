import React from 'react';

import UseResources from './UseResources';

const UserList = () => {
    const users = UseResources('users');

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.title}</li>)}
        </ul>
    );
}

export default UserList;