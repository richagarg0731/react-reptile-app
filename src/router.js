import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Reptiles from './components/Reptiles';
import Map from './components/Map';

//Goals with Map Page: 
// 1. if user selects from navigation, go to default Map page without passing argument (accessed from router.js; result: blank map)
// 2. if user clicks on "See Map Here" from an individual species in the Reptiles page then pass the reptile species as an argument to the Map page (accessed from Reptiles.js; result: all the countries in that species' range will be highlighted)
// 3. if user clicks on a country from the list that includes all countries of a particular species's range (in Reptiles page), then a country is passed to the Map page (accessed from Reptiles.js; result: that country would be highlighted)



const routes = (
  <Router history={browserHistory}>
  	<Route component={App}>
  		<Route path="/" component={Home}/>
  		<Route path="reptiles" name="reptiles" component={Reptiles}/>
  		<Route path="map/:reptileId" component={Map} name="map" />
  	</Route>
  </Router>
);

export default routes;

