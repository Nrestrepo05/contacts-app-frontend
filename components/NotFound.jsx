import React from 'react';

const NotFound = ({ title, subtitle }) => {
  return (
    <>
      <div className="columns is-centered is-vcentered cont">
        <div className="column is-four-fifths is-vcentered">
          <img src="/assets/icons/contact.svg" alt="contact-ico" width="150px" />
          <h1 className="title is-3">{title}</h1>
          <h3 className="subtitle is-3">{subtitle}</h3>
        </div>
      </div>
      <style jsx>
        {`
          div.cont {
            text-align: center;
            min-height: calc(100vh - 232px);
            max-height: calc(100vh - 232px);
          }
      `}
      </style>
    </>
  );
};

export default NotFound;
