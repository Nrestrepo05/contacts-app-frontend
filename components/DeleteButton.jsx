import React from 'react';

const DeleteButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>
        Delete
      </button>
      <style jsx>
        {`
          button{
              min-width: 210px;
              max-width: 210px;
              min-height: 40px;
              max-height: 40px;
              font-size: 18px;
              font-weight: bold;
              border-radius: 7px;
              border: none;
              background: #DC3545;
              color: #fff;
          }
          button:focus {
            opacity: 0.5;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default DeleteButton;
