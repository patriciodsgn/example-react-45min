import React from 'react';
import './Nav.css';

function Nav({ data }) {
  return (
    <div className="Nav">
      <ul>
        <li><a href="/">home</a></li>
        {
          data.map((d,idx)=>{
            return <li key={'a'+idx}><a href={d.url}>{d.name}</a></li>
          })
        }
      </ul>
    </div>
  );
}

export default Nav;
