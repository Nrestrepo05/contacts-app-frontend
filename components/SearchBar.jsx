import React from 'react';
import { useRouter } from 'next/router';
import useInputValue from '../hooks/useInputValue';

const SearchBar = ({ hidden }) => {
  const searchQuery = useInputValue('');

  const router = useRouter();

  const handleInputOnSubmit = () => {
    router.push(`/contacts/?search=${searchQuery.value}`);
  };

  return (
    <>
      <div className={hidden ? 'hidden' : 'column is-two-fifths'}>
        <input
          placeholder="Search contact..."
          className="input is-primary is-rounded"
          value={searchQuery.value}
          onChange={searchQuery.onChange}
          onSubmit={handleInputOnSubmit}
          onKeyPress={handleInputOnSubmit}
        />
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

export default SearchBar;
