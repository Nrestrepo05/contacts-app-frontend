import React from 'react';

const SearchButton = ({ onClick, hidden }) => {
  return (
    <>
      <button onClick={onClick} className={hidden ? 'hidden' : ''}>
        <p>Search</p>
        <img src="/assets/icons/search.svg" alt="search icon" />
      </button>
      <style jsx>
        {`
          button {
            border: 1px solid #183152;
            border-radius: 7px;
            min-width: 15%;
            max-width: 15%;
            min-height: 38px;
            max-height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            outline: none;
          }
          button:focus {
            outline: none;
          }
          button.hidden {
            display: none;
          }
          p {
            display: none;
          }
          img {
            min-width: 26px;
            max-width: 26px;
            min-height: 26px;
            max-height: 26px;
          }
          @media screen and (min-width: 440px) {
            button {
              min-width: 17%;
              max-width: 17%;
            }
          }
          @media screen and (min-width: 768px) {
            p {
              display: inline-block;
              font-size: 18px;
              font-weight: bold;
              color: #183152;
              /* margin-right: 10%; */
            }
            button {
              justify-content: space-around
            }
          }
          @media screen and (min-width: 1024px) {
            p {
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchButton;
