import React from 'react';
import Link from 'next/link';

const ContactInfo = ({
  name, lastName, email, id,
}) => {
  return (
    <>
      <div className="column is-three-quarters is-centered">
        <Link href={`/contacts/${id}`}>
          <a className="box">
            <h2 className="title is-5">
              {name}
              {' '}
              {lastName}
            </h2>
            <p className="subtitle is-5">{email}</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ContactInfo;
