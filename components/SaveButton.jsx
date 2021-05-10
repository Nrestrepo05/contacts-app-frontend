import React from 'react';

const SaveButton = ({
  onClick,
}) => {
  return (
    <>
      <div className="column is-one-fifth">
        <button
          className="button is-primary is-fullwidth"
          onClick={onClick}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default SaveButton;
