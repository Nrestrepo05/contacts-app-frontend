import React from 'react';

const Input = ({
  property, id, value = '', onChange, error,
}) => {
  return (
    <>
      <div className="column" style={{ paddingBottom: '0' }}>
        <label htmlFor={id}>{property}</label>
        <input
          className={error ? 'input is-danger' : 'input is-primary'}
          id={id}
          type="text"
          placeholder={property}
          value={value}
          onChange={onChange}
        />
        {error
          ? (
            <p className="has-text-danger">{error}</p>
          )
          : ''}
      </div>
    </>
  );
};

export default Input;
