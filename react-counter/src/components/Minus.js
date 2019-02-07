import React from 'react';

function Minus({onCountDown}) {
  return (
    <div className='minus' onClick={onCountDown}>
      -
    </div>
  );
}

export default Minus;
