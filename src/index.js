import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'; 

// setting global base URL for usage of axios.get() or other
// operations
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'; 

// These 2 lines below are unused, not really sure of the 
// usage
// If you actually see the data in the console that 
// Appears for every request, you'll see it
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; 
axios.defaults.headers.post['Content-Type'] = 'application/json'; 

// This is used to handle requests globally
// Any request that you send will go through this
// and you can modify the request here, 
// also handling error
axios.interceptors.request.use(request => {
    console.log(request);
    // edit request 
    return request; 
}, error => {
    console.log(error); 
    return Promise.reject(error); 
});

// Handling Response: 
axios.interceptors.response.use(response => {
    console.log(response);
    // edit request 
    return response; 
}, error => {
    console.log(error); 
    return Promise.reject(error); 
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
