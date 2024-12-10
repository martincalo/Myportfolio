// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ApiFetch from './ApiFetch';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import ApiFetch from './ApiFetch';

function App() {
    return (
        <div className="App">
            <ApiFetch />
        </div>
    );
}

export default App;


// import React, { useState, useEffect } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:8000/api/hello/')
//       .then((response) => response.json())
//       .then((data) => {
//         setMessage(data.name); // Aquí asumimos que la respuesta tiene la propiedad 'name' con "Hello World"
//       })
//       .catch((error) => console.error('Error fetching data: ', error));
//   }, []);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App;
