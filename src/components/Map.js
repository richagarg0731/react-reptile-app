import React from 'react';
import CountryList from '../data/countries';
import d3 from 'd3';
import { select } from 'd3-selection';
import { geo } from 'd3-geo';


var Map = React.createClass({
  
  render: function() {

    
	return (
		<div>
      		<h2>Reptile passed from props: {this.context.params.reptileId} </h2>
      	</div>
    )
    
    }
    
});
 


export default Map;