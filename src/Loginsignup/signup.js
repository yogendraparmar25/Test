import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
  const data = {
    name: "",
    fatherName: "",
    email: "",
    phone_number: "",
    password: ""
  };

  const [inputdata, setdata] = useState(data);

  function handledata(e) {
    setdata({
      ...inputdata,
      [e.target.name]: e.target.value
    });
  }

  const formStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    height: '100vh'

  };

  const linkstyle = {
    textAlign: 'center'
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

  const submitbutton = {
    backgroundColor: 'green',
    color: 'white',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <form className="container" style={formStyle}>
      <div className="header">
        <h1>Registration form</h1>
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={inputdata.name}
          onChange={handledata}
          style={inputStyle}
        />
      </div>

      <div>
        <input
          type="text"
          name="fatherName"
          placeholder="Enter father's name"
          value={inputdata.fatherName}
          onChange={handledata}
          style={inputStyle}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={inputdata.email}
          onChange={handledata}
          style={inputStyle}
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone_number"
          placeholder="Enter phone number"
          value={inputdata.phone_number}
          onChange={handledata}
          style={inputStyle}
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={inputdata.password}
          onChange={handledata}
          style={inputStyle}
        />
      </div>
      <button type='submit' style={submitbutton}>Signup</button>
      <div style={linkstyle}>
        <text>
          Already have an Acoount
        </text>
        <Link to={'/login'}>
          Sign in </Link>
      </div>
    </form>

  );
}

export default SignupForm;
