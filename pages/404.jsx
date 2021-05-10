import React from 'react';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const CustomNotFound = () => {
  return (
    <>
      <Layout center="true" title="Error 404 | Contacts App">
        <NotFound title="404 Not Found" subtitle="Sorry, this page does not exist!" />
      </Layout>
    </>
  );
};

export default CustomNotFound;
