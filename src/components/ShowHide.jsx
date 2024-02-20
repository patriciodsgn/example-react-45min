import React, { useState } from 'react';

function ShowHide() {
  const [show, setShow] = useState(true);
  const handleClick = (event)=>{
    setShow(!show);
  };
  return (
    <div>
      <button onClick={handleClick}>{show ? 'hide' : 'show'} text</button>
      <div>{show && <h2>hide me!</h2>}</div>
    </div>
    // <div>{show ? <h2>hide me!</h2> : ""}</div>
  )
}

export default ShowHide