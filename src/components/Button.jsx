import React from 'react';

const Button = ({ label, type = 'primary' }) => {
  return (
    <button className={type === 'primary' ? 'btn-primary' : 'btn-secondary'}>
      {label}
    </button>
  );
};

export default Button;

