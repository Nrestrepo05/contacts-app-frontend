import React from 'react';
import ContactDetail from '../../components/ContactDetails';
import useInputValue from '../../hooks/useInputValue';

const New = () => {
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
      />
    </>
  );
};

export default New;
