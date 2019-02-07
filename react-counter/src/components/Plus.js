import React from 'react';

function Plus({onCountUp}) {
  return (
    <div className='plus' onClick={onCountUp}>
      +
    </div>
  );
}

export default Plus;
