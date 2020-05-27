import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header/Header';
import Landing from './landing/Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';



const surveyNew = () => <h1>New Survey</h1>;
const dashboard = () => <h1>Dashboard</h1>;

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
            <Route path="/surveys" exact component={dashboard} />
            <Route path="/surveys/new" exact component={surveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions) (App);
