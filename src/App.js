import React, {useState} from 'react';
import './App.css';

function App(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Validate form inputs
    const newError = [];
    if (!name || !email || !password || !confirmPassword) {
      newError.push('All fields are mandatory');
    }

    if (password !== confirmPassword) {
      newError.push('Passwords do not match');
    }
    setError(newError);

    
    // Show success message
    setSuccess('Signup successful');

}

 return (
    <div className='signup-container'>
      <h1>Signup</h1>
      
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}


export default App;
