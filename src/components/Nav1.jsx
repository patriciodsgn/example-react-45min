import React from 'react';
import {Link} from 'react-router-dom';
import './Nav1.css';

function Nav({ data }) {
  return (
    <div className="Nav">
        <a href="/">home</a>
        {
          data.map((d,idx)=>{
            return <Link key={'link'+idx} to={d.url}>{d.name}</Link>
          })
        }
    </div>
  );
}

export default Nav;
