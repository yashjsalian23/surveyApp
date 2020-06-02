import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header/Header';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import SurveyNew from '../components/surveys/SurveyNew';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';



class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route component={Header} />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions) (App);
