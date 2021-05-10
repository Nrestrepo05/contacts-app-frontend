import React from 'react';

const PrevNextButtons = ({
  prev, next, prevOnClick, nextOnClick,
}) => {
  return (
    <>
      {prev && !next
        ? (
          <div className="column is-one-fifth">
            <button onClick={prevOnClick} className="button is-primary is-fullwidth">
              {/* <span className="icon">
                <i className="fas fa-arrow-right" />
              </span> */}
              Prev
            </button>
          </div>
        )
        : ''}
      {next && !prev
        ? (
          <div className="column is-one-fifth">
            <button onClick={nextOnClick} className="button is-primary is-fullwidth">
              Next
              {/* <span className="icon">
                <i className="fas chevron-right" />
              </span> */}
            </button>
          </div>
        )
        : ''}
      {
        prev && next
          ? (
            <div className="column is-two-fifths">
              <div className="columns">
                <div className="column is-half">
                  <button onClick={prevOnClick} className="button is-primary is-fullwidth">Prev</button>
                </div>
                <div className="column is-half">
                  <button onClick={nextOnClick} className="button is-primary is-outlined is-fullwidth">Next</button>
                </div>
              </div>
            </div>
          )
          : ''
      }
    </>
  );
};

export default PrevNextButtons;
