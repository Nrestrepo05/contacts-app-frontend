import React, { useState, useEffect } from 'react';

const ExitButton = ({
  children, hidden, onClick,
}) => {
  const [className, setClassName] = useState('');
  useEffect(() => {
    let classNames = 'column is-one-fifth ';
    if (hidden) classNames += 'hidden ';
    setClassName(classNames);
  });

  return (
    <>
      <div className={className}>
        <button className="button is-danger is-fullwidth" onClick={onClick}>
          {children}
        </button>
      </div>
      <style jsx>
        {`
          .hidden {
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default ExitButton;
