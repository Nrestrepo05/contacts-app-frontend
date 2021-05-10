import React from 'react';

const SearchButton = ({ onClick, hidden }) => {
  return (
    <>
      <div className={hidden ? 'hidden' : 'column is-one-fifth'}>
        <button onClick={onClick} className="button is-primary is-outlined is-fullwidth">
          Search
          {/* <img src="/assets/icons/search.svg" alt="search icon" width="20px" /> */}
        </button>
      </div>
      <style jsx>
        {`
          .hidden {
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default SearchButton;
