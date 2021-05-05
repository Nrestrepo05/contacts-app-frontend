import React from 'react';
import ContactDetail from '../../components/ContactDetails';
import useInputValue from '../../hooks/useInputValue';

const Contacts = ({ contact }) => {
  const id = contact._id;

  const name = useInputValue(contact.name);
  const lastName = useInputValue(contact.last_name);
  const email = useInputValue(contact.email);
  const phoneNumber = useInputValue(contact.phone_number);
  const company = useInputValue(contact.company);

  return (
    <>
      <ContactDetail
        id={id}
        name={name}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        company={company}
        method="PUT"
        deleteButton="true"
      />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const baseUrl = process.env.BACKEND_HOST;
  const response = await fetch(`${baseUrl}/contacts/${params.id}`);
  const data = await response.json();
  const contact = data.body;
  return {
    props: { contact },
  };
}

export default Contacts;
