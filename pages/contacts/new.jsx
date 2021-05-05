import React from 'react';
import ContactDetail from '../../components/ContactDetails';
import useInputValue from '../../hooks/useInputValue';

const New = ({ baseUrl }) => {
  const name = useInputValue('');
  const lastName = useInputValue('');
  const email = useInputValue('');
  const phoneNumber = useInputValue('');
  const company = useInputValue('');

  return (
    <>
      <ContactDetail
        name={name}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        company={company}
        method="POST"
        baseUrl={baseUrl}
      />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const baseUrl = process.env.BACKEND_HOST;
  return {
    props: { baseUrl },
  };
}

export default New;
