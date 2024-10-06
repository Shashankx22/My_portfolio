import React from 'react';  // Import React library
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering components
import App from './App';  // Import the main App component
 
// Create a root DOM element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root, wrapped in StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
