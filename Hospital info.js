import React from 'react';
import '../../App.css';


export default function hospitalinfo() {

  return (
    <div className='hospitalinfo'>
  
  <form action="/" method="get" style={{width: 550}}>
        <label htmlFor="header-search">
            <span className="visually-hidden" style={{fontSize : 18, color:'green'}}>Search hospital</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search hospitals"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
    );

}
