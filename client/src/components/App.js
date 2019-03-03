import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Page404 from './404';
import Header from './partials/Header';
import Footer from './partials/Footer'
import Home from './Home';
import About from './About';
import Login from './user/Login';
import Register from './user/Register';
import ApiIndex from './api/ApiIndex';
import ApiRest from './api/ApiRest';
import ApiSdk from './api/ApiSdk';
import ApiSoap from './api/ApiSoap';
import CustomActivityIndex from './customActivity/CaIndex';
import CustomActivitySetup from './customActivity/CaSetup';
import CustomActivityList from './customActivity/CaList';
import CustomActivityCreate from './customActivity/CaCreate';
 

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
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>

                <Route path="/api" exact component={ApiIndex} />
                <Route path="/api/rest" exact component={ApiRest} />
                <Route path="/api/sdk" exact component={ApiSdk} />
                <Route path="/api/soap" exact component={ApiSoap} />
                <Route path="/ca" exact component={CustomActivityIndex} />
                <Route path="/ca/index" component={CustomActivityIndex} />
                <Route path="/ca/setup" component={CustomActivitySetup} />
                <Route path="/ca/list" component={CustomActivityList} />
                <Route path="/ca/create" component={CustomActivityCreate} />
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
