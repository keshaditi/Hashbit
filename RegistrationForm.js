import React, { useState } from 'react';
import Input from './Input'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const validationErrors = validateForm(); 
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
     
      console.log('Form submitted:', formData);
      
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <Input type="text" name="name" label="Name" value={formData.name} onChange={handleChange} error={errors.name} />
      {/* ...other input fields... */}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;