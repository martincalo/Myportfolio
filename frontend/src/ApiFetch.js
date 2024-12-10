import React, { useState, useEffect } from 'react';

function ApiFetch() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hello/')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching API:', error));
    }, []);

    return (
        <div>
            <h1>{message ? message : 'Loading...'}</h1>
        </div>
    );
}

export default ApiFetch;
