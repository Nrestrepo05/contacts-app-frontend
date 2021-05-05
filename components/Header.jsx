import React from 'react';
import Link from 'next/link';

const Header = () => (
  <>
    <header>
      <Link href="/">
        <a>
          <h1>Your Contacts</h1>
        </a>
      </Link>
    </header>
    <style jsx>
      {`
        header {
          min-height: 60px;
          max-height: 60px;
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #375D81;
          color: #fff;
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      `}
    </style>
  </>
);

export default Header;
