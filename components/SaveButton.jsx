import React, { useState, useEffect } from 'react';

const SaveButton = ({
  small, big, disabled, onClick,
}) => {
  const [className, setClassName] = useState('');
  useEffect(() => {
    let classNames = '';
    if (small) classNames += 'small ';
    if (big) classNames += 'big ';
    if (disabled) classNames += 'hidden ';
    setClassName(classNames);
  });
  return (
    <>
      <button
        className={className}
        onClick={onClick}
      >
        Save
      </button>
      <style jsx>
        {`
          button {
            background: #198754;
            border-radius: 7px;
            border: none;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
          }
          button:focus {
            border: none;
            outline: none;
            opacity: 0.5;
          }
          button.small {
            min-width: 50px;
            max-width: 50px;
            min-height: 30px;
            max-height: 30px;
          }
          button.big {
            font-size: 18px;
            min-width: 100px;
            max-width: 100px;
            min-height: 40px;
            max-height: 40px;
          }
          img {
            min-width: 20px;
            max-width: 20px;
            min-height: 20px;
            max-height: 20px;
          }
        `}
      </style>
    </>
  );
};

export default SaveButton;
