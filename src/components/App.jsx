import React from 'react';
import Header from './Header';
import Content from './Content';
import Homes from './Homes';
import Restaurants from './Restaurants';
import Experiences from './Experiences';
import { Switch, Route } from 'react-router-dom';


// import PropTypes from "prop-types"; <--- needed for props

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Content} />
        <Route path='/homes' component={Homes} />
        <Route path='/restaurants' component={Restaurants} />
        <Route path='/experiences' component={Experiences} />
      </Switch>

    </div>
  );
}

export default App;
