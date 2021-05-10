import React from 'react';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const CustomServerError = () => {
  return (
    <>
      <Layout center="true">
        <NotFound title="500 Server Error" subtitle="Sorry, we are having problems!" />
      </Layout>
    </>
  );
};

export default CustomServerError;
