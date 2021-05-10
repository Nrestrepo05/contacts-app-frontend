import React from 'react';
import Link from 'next/link';

const Header = () => (
  <>
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="navbar-item title is-3">
          <Link href="/contacts">
            <a>
              Contacts App
            </a>
          </Link>
        </h1>
      </div>
    </nav>

    <style jsx>
      {`
        a {
          color: white;
        }
      `}
    </style>
  </>
);

export default Header;
