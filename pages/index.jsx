import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <section>

          <h1>Welcome to Contacts App!</h1>
          <p>
            This is an app that allows you to create and edit contacts.
            <br />
            It also allows you to search for the contacts stored by any of its fields.
          </p>
          <p>
            This app is built in Next.JS, and it consumes an api written in node.JS
          </p>
          <p>
            If you want to see the code of this app, you can enter&nbsp;
            <a href="https://github.com/Nrestrepo05/contacts-app-frontend">this link</a>
          </p>
          <p>
            If you want to try the api you can enter&nbsp;
            <a href="https://contacts-api-nrestrepo05.herokuapp.com/contacts">this link</a>
          </p>
          <p>
            and if you want to see the api code you can enter&nbsp;
            <a href="https://github.com/Nrestrepo05/contacts-app-api">this link</a>
          </p>

          <p><strong>Thanks for entering. I hope you like it!</strong></p>

          <Link href="/contacts">
            <a className="button">Go to Contacts App!</a>
          </Link>
        </section>
      </Layout>
      <style jsx>
        {`
          section {
            text-align: center;
            margin-top: 30px;
          }
          p {
            margin-top: 10px;
            color: #375D81;
          }
          h1 {
            color: #183152;
          }
          p strong {
            color: #183152;
          }
          a {
            color: #183152;
          }
          a.button {
            color: white;
            background: #375D81;
            min-width: 180px;
            max-width: 180px;
            padding: 10px 20px;
            margin-top: 20px;
            display: inline-block;
            border-radius: 7px;
            text-decoration: none;
            font-weight: bold;
          }
          a.button:focus {
            opacity: 0.5;
          }
        `}
      </style>
    </>
  );
};

export default Home;
