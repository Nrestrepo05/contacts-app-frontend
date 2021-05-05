import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <a href="https://nrestrepo05.vercel.app">
          made with ❤ by nrestrepo05
        </a>
      </footer>
      <style jsx>
        {`
        footer {
          min-height: 30px;
          max-height: 30px;
          min-width: 100%;
          background: #183152;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      `}
      </style>
    </>
  );
};

export default Footer;
