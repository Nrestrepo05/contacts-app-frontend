import React from 'react';

const Input = ({
  property, id, value = '', onChange, error,
}) => {
  return (
    <>
      <label htmlFor={id}>{property}</label>
      {error ? <p>{error}</p> : ''}
      <input id={id} type="text" placeholder={property} value={value} onChange={onChange} />
      <style jsx>
        {`
          label {
            display: block;
            color: #375D81;
          }
          input {
            border-radius: 7px;
            border: none;
            background: #375D81;
            color: white;
            font-size: 18px;
            font-weight: bold;
            min-width: calc(100% - 20px);
            max-width: calc(100% - 20px);
            min-height: 45px;
            max-height: 45px;
            padding: 0 10px;
            margin-bottom: 10px;
          }
          input:focus {
            outline: none;
            opacity: 0.9;
          }
          input::placeholder {
            color: #fff;
          }
          p {
            color: #DC3545;
          }
        `}
      </style>
    </>
  );
};

export default Input;
