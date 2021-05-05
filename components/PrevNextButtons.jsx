import React from 'react';

const PrevNextButtons = ({
  prev, next, prevOnClick, nextOnClick,
}) => {
  return (
    <>
      {prev && !next
        ? <button onClick={prevOnClick} className="prev">Prev</button>
        : ''}
      {next && !prev
        ? <button onClick={nextOnClick} className="next">Next</button>
        : ''}
      {
        prev && next
          ? (
            <div>
              <button onClick={prevOnClick} className="prev two">Prev</button>
              <button onClick={nextOnClick} className="next">Next</button>
            </div>
          )
          : ''
      }
      <style jsx>
        {`
          div {
            display: flex;
          }
          button {
            min-height: 38px;
            max-height: 38px;
            min-width: 66px;
            max-height: 66px;
            border-radius: 7px;
            border: none;
            background: transparent;
            font-size: 18px;
            font-weight: bold;
          }
          button:focus {
            outline: none;
            opacity: 0.5;
          }
          button.prev {
            color: #198754;
            border 1px solid #198754;
          }
          button.prev.two {
            margin-right: 10px;
          }
          button.next {
            color: #fff;
            background: #198754;
          }
        `}
      </style>
    </>
  );
};

export default PrevNextButtons;
