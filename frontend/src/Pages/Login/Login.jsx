import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');
    if (username !== 'admin') {
        setUsernameError('Invalid username');
      }
    if (password !== 'admin123') {
        setPasswordError('Invalid password');
    }
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('loggedIn', 'true');
        navigate('/add-product');
    }
    console.log(username, password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-title'>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
