import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Logo from '../img/logo.png';
import '../css/Home.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here

    // For demonstration, navigate to '/dashboard' route after successful login
    // You can replace this with your actual login logic
    console.log('Submitted:', { username, password });
    // Redirect to the dashboard page
    window.location.href = '/dashboard';
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="i-cube Logo" />
      <h2>i-cube Digital Solutions Inc.</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default LoginForm;
