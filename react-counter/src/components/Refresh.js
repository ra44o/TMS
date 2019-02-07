import React from 'react';

function Refresh({reload}) {
  return (
    <div className='refresh' onClick={reload}>
      &#8635;
    </div>
  );
}

export default Refresh;
