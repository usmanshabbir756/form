
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import RegistrationForm from './component/RegistrationForm';
import './App.css';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <div className="App">
    <Router>
    <div className="App">
      <nav>
        <ul className='login' >
          <li>
          <Button type="submit" variant="contained" color="primary">
          <Link to="/login">Login</Link>
      </Button>
            
          </li>
          <li>
          <Button type="submit" variant="contained" color="primary">
          <Link to="/register">Register</Link>
      </Button>
            
          </li>
        </ul>
      </nav>
      </div>

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
};

const Home = () => {
  return <h2>Home Page</h2>;
};

export default App;
