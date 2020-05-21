import React from 'react';

import UseResources from './UseResources';

const ResourceList = ({ resource }) => {

    const resources = UseResources(resource);

    return (
        <ul>
            {resources.map(record => <li key={record.id}>{record.title}</li>)}
        </ul>
    );
}

export default ResourceList;