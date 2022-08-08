import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <Form
        className="form p-5 rounded"
        autoComplete="off"
        onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <div className="mb-3">
            <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={credentials.email}
            onChange={handleChange}
            required />
          </div>
        <div className="mb-3">
            <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
            required />
            <Button
              type="submit"
              className="m-5 btn btn-dark">LOG IN</Button>
          </div>
        <p className="error-message">&nbsp;{error}</p>
      </Form>
    </div>
  );
}
