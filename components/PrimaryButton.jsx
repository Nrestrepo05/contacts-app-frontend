/* eslint-disable no-nested-ternary */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const PrimaryButton = ({ children, buttonType, hidden }) => {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleButtonClick = (e) => {
    e.preventDefault();
    setDisabled(true);
    router.push('/contacts/new');
  };

  const [className, setClassName] = useState('');
  useEffect(() => {
    let classNames = '';
    if (disabled) classNames += 'disabled ';
    if (hidden) classNames += 'hidden ';
    setClassName(classNames);
  });

  return (
    <>
      <button
        type={buttonType}
        onClick={handleButtonClick}
        className={className}
      >
        {children}
      </button>
      <style jsx>
        {`
          button {
            min-height: 40px;
            max-height: 40px;
            min-width: 80%;
            max-width: 80%;
            color: white;
            background: #183152;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 7px;
            margin-right: 5%;
            border: none;
            font-size: 18px;
            font-weight: bold;
          }
          button.disabled {
            opacity: 0.5;
          }
          button.hidden{
            display: none;
          }
          button:focus {
            border: none;
            outline: none;
          }
          @media screen and (min-width: 440px) {
            button {
              margin-right: 3%;
            }
          }
        `}
      </style>
    </>
  );
};

export default PrimaryButton;
