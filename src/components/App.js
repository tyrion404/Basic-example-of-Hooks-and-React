import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

    const [resource, setResource] = useState('posts');

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            Hooks and React.
            <br />
                Basic example of how hook works.
            <br />
            <br />
            <div>
                <button
                    className="ui button secondary"
                    onClick={() => setResource('posts')}
                >
                    Posts
                </button>
                <button
                    className="ui button secondary"
                    onClick={() => setResource('todos')}
                >
                    Todos
                </button>
            </div>
            <ResourceList resource={resource} />
            <br />
            Users
            <UserList />
        </div >
    );
}

export default App;