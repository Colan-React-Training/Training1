import React from 'react';

const Input = ({name,
  handleChange}) => {
  return <div><input type="text" value={name} onChange={handleChange} /></div>;
};

export default Input;
