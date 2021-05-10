import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            made with ❤️ by&nbsp;
            <strong>
              <a href="https://nrestrepo05.vercelapp.com">
                Nrestrepo05
              </a>
            </strong>
          </p>
        </div>
      </footer>
      {/* <style jsx>
        {`
        footer {
          min-height: 30px;
          max-height: 30px;
          min-width: 100%;
          background: #183152;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      `}
      </style> */}
    </>
  );
};

export default Footer;
