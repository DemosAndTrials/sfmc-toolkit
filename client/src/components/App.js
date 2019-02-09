import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './partials/Header';
import Home from './Home';
import Footer from './partials/Footer'
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const About = () => <h2 className="slds-box">About</h2>;

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
              <Route path="/" exact component={Home} />
              <Route path="/surveys" exact component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
              <Route path="/about" component={About} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions) (App);
