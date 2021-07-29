import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import Provider from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
      <Provider>
        <Routes />
        <Login />
      </Provider>
  );
}

export default App;