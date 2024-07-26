import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    collegeID:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the form data to the console
    console.log('Form Data:', formData);
    // You can replace this with a function to handle form submission, e.g., an API call
  };
    const myStyle = {
      height: "0vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  return (
    <div style={myStyle}>
    <div className="App1">
      <form onSubmit={handleSubmit}>
        <h1>Library Sign Up</h1>
        <div className='inputapp'>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputapp'>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputapp'>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone No.'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputapp'>
          <input
            type="text"
            id="college"
            name="college"
            placeholder='College Name'
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputapp'>
          <input
          type='text'
          id='id'
          name='collegeid'
          placeholder='College ID'
          value={formData.collegeID}
          onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
  );
}

export default App;
