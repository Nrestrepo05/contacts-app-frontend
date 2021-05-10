import React from 'react';

const DeleteButton = ({ onClick }) => {
  return (
    <>
      <div className="column is-two-fifths">
        <button onClick={onClick} className="button is-danger is-fullwidth">
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteButton;
