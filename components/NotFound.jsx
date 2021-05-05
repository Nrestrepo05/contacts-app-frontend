import React from 'react';

const NotFound = ({ title, subtitle }) => {
  return (
    <>
      <img src="/assets/icons/contact.svg" alt="contact-ico" />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <style jsx>
        {`
          img {
            min-width: 150px;
            max-width: 150px;
          }
          h1 {
            font-size: 26px;
            color: #183152;
          }
          h3 {
            font-size: 18px;
            color: #183152;
          }
          @media screen and (min-width: 768px) {
            img {
              min-width: 200px;
              max-width: 200px;
            }
            h1 {
            font-size: 30px;
            color: #183152;
            }
            h3 {
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  );
};

export default NotFound;
