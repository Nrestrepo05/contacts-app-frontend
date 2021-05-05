/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

const ExitButton = ({
  small, big, margin, hidden, onClick,
}) => {
  const [className, setClassName] = useState('');
  useEffect(() => {
    let classNames = '';
    if (small) classNames += 'small ';
    if (big) classNames += 'big ';
    if (margin) classNames += 'margin ';
    if (hidden) classNames += 'hidden ';
    setClassName(classNames);
  });

  return (
    <>
      <button className={className} onClick={onClick}>
        {small && !big ? (<img src="/assets/icons/cancel.svg" alt="cancel icon" />) : ''}
        {!small || big ? 'Exit' : ''}
      </button>
      <style jsx>
        {`
          button {
            background: #DC3545;
            border-radius: 7px;
            border: none;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
          }
          button.hidden {
            display: none;
          }
          button:focus {
            border: none;
            outline: none;
            opacity: 0.5;
          }
          button.small {
            min-width: 30px;
            max-width: 30px;
            min-height: 30px;
            max-height: 30px;
          }
          button.big {
            min-width: 100px;
            max-width: 100px;
            min-height: 40px;
            max-height: 40px;
          }
          button.big.margin {
            margin-right: 10px;
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

export default ExitButton;
