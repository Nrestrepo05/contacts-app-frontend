import React from 'react';
import { useRouter } from 'next/router';
import useInputValue from '../hooks/useInputValue';

const SearchBar = ({ hidden }) => {
  const searchQuery = useInputValue('');

  const router = useRouter();

  const handleInputOnSubmit = () => {
    router.push(`/?search=${searchQuery.value}`);
  };

  return (
    <>
      <input
        placeholder="Search contact..."
        className={hidden ? 'hidden' : ''}
        value={searchQuery.value}
        onChange={searchQuery.onChange}
        onSubmit={handleInputOnSubmit}
        onKeyPress={handleInputOnSubmit}
      />
      <style jsx>
        {`
          input {
            min-height: 40px;
            max-height: 40px;
            min-width: calc(85% - 40px);
            max-width: calc(85% - 40px);
            padding: 0 20px;
            border: 2px solid #183152;
            background: transparent;
            border-radius: 30px;
            font-size: 18px;
            font-weight: bold;
            margin-right: 10px;
          }
          input.hidden {
            display: none;
          }
          input::placeholder {
            color: #183152;
          }
          input:focus {
            outline: none;
            box-shadow: 2px 5px rgba(0, 0, 0, .05);
          }
        `}
      </style>
    </>
  );
};

export default SearchBar;
