import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const data = { email: '', password: '' };
  const [inputdata, setdata] = useState(data);

  function handledata(e) {
    setdata({
      ...inputdata,
      [e.target.name]: e.target.value
    });
  }
  const inputStyle = {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none'
  };
  const linkstyle = {
    textAlign: 'center'
  }
  const formstyle = {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh'

  }

  const Buttonstyle = {
    backgroundColor: 'green',
    color: 'white',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };
  return (
    <form className="container" style={formstyle}>
      <div className="header">
        <h1>Login Form</h1>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          style={inputStyle}
          onChange={handledata}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={inputdata.password}
          onChange={handledata}
          style={inputStyle}

        />
      </div>
      <button style={Buttonstyle} >Log in</button>
      <div style={linkstyle}>
        <text>Not a member ?</text>
        <Link to="/">Sign Up</Link>
      </div>


      <div style={linkstyle}>
        <text>go to todo ?</text>
        <Link to="/todo">TO-DO -LIST</Link>
      </div>

    </form>
  );
}

export default LoginForm;
