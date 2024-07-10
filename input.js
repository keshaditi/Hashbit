
import React from 'react';

function Input({ type, name, label, value, onChange, error }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input;
