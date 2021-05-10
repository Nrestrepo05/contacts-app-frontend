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
    let classNames = 'column is-two-fifths ';
    if (disabled) classNames += 'disabled ';
    if (hidden) classNames += 'hidden ';
    setClassName(classNames);
  });

  return (
    <>
      <div className={className}>
        <button
          type={buttonType}
          onClick={handleButtonClick}
          className="button is-primary is-fullwidth"
        >
          {children}
        </button>
      </div>
      <style jsx>
        {`
          .hidden{
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default PrimaryButton;
