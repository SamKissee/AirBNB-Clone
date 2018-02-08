import React from 'react';
import Header from './Header';
import Content from './Content';
import Homes from './Homes';
import Restaurants from './Restaurants';
import Experiences from './Experiences';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';


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
        <Route path='/about' component={About} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
