import React from 'react';
import ReptileList from '../data/reptiles';
import NavLink from './NavLink';





const Reptiles = () => {
  let reptiles = ReptileList.map((reptile) => {
    return (
      <li className="reptile" key={reptile.id} >
        <img className="reptile-img" src={reptile.img_src} />
        <h3>{reptile.name}</h3>
        <h4> Range &nbsp; &nbsp; 
        	<span className="seeMap">
        		<NavLink to={`map/${reptile.id}`}>See Map Here </NavLink>
        	</span>
        </h4> 
      		{reptile.range.map(function(country,index) {
      			// only add comma if it's not the last one
   				return <span key={country}><NavLink to={`map/${reptile.id}/${country}`}> {(index < reptile.range.length-1)? country+',' : country} </NavLink></span>
   			})
   			}
   		
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Reptiles</h2>
      <ul className="group">
        {reptiles}    
      </ul>
    </div>
  );
}

export default Reptiles;
