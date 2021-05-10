import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, center, title }) => {
  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | Contacts App
        </title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📘</text></svg>" />
      </Head>
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
