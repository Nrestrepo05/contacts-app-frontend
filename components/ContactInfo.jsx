import React from 'react';
import Link from 'next/link';

const ContactInfo = ({
  name, lastName, email, id,
}) => {
  return (
    <>
      <Link href={`/contacts/${id}`}>
        <a>
          <h2>
            {name}
            {' '}
            {lastName}
          </h2>
          <p>{email}</p>
        </a>
      </Link>
      <style jsx>
        {`
          a {
            min-height: 50px;
            max-height: 50px;
            min-width: calc(100% - 40px);
            max-width: calc(100% - 40px);
            background: #375D81;
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 0 20px;
            border-radius: 7px;
            flex-direction: column;
            margin-bottom: 20px;
            text-decoration: none;
          }
          h2 {
            font-size: 18px;
            margin-bottom: -5px;
          }
          p {
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
};

export default ContactInfo;
