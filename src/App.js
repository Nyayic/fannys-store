import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import LadiesWear from './components/LadiesWear';
import MensWear from './components/MensWear';
import Footer from './components/Footer';
import './index'
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
      <Route path="/" component={Homepage} exact/>
      <Route path="/ladies-wear" component={LadiesWear} exact/>
      <Route path="/mens-wear" component={MensWear} exact/>


      </Switch>
      <br />
      <br />
      <Footer />

      </div>
    </BrowserRouter>

    // <div className="App">
    //   <NavBar></NavBar> <br></br>
    //   <Homepage></Homepage>
    // </div>
  );
}

export default App;


