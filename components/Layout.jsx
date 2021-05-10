import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, center }) => {
  return (
    <>
      <Header />
      <main className={center ? 'center' : ''}>
        {children}
      </main>
      <Footer />
      <style jsx>
        {`
          main {
            min-height: calc(100vh - 130px);
            padding: 20px 14px;
          }
          main.center {
            justify-content: center;
          }
          @media screen and (min-width: 440px) {
            main {
              padding: 20px 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
