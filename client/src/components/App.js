import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Page404 from './404';
import Header from './partials/Header';
import Footer from './partials/Footer'
import Home from './Home';
import About from './About';
import ApiIndex from './api/ApiIndex';
import ApiRest from './api/ApiRest';
import ApiSdk from './api/ApiSdk';
import ApiSoap from './api/ApiSoap';
import CustomActivity from './customActivity/CaIndex';
 

class App extends Component {
componentDidMount(){
  this.props.fetchUser();
}

render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <div className="slds-m-top_xx-large slds-m-horizontal_small">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/api" exact component={ApiIndex} />
                <Route path="/api/rest" exact component={ApiRest} />
                <Route path="/api/sdk" exact component={ApiSdk} />
                <Route path="/api/soap" exact component={ApiSoap} />
                <Route path="/ca" exact component={CustomActivity} />
                <Route path="/about" component={About} />
                <Route component={Page404} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions) (App);
