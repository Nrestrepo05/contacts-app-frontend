import React from 'react';

const Input = ({
  property, id, value = '', onChange, error,
}) => {
  return (
    <>
      <div className="column">
        <label htmlFor={id}>{property}</label>
        {error ? <p>{error}</p> : ''}
        <input
          className="input is-primary"
          id={id}
          type="text"
          placeholder={property}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
