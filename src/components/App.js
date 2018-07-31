import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from "./Loading";

import {
    handleInitialData
} from "../actions/shared";

import Nav from "./Nav";
import AppRoutes from "./AppRoutes";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitialData());
    }

    render() {
        const {loading} = this.props;

    return (
        <Router>
      <div className={'container'}>
          <Nav/>
          {loading === true ? <Loading/> : <AppRoutes/>}
      </div>
        </Router>

    )
  }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);