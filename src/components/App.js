import React, { Component } from 'react'
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from "./Loading";

import {
    handleInitialData
} from "../actions/shared";
import Nav from "./Nav";
import Polls from "./Polls";
import Leaderboard from "./Leaderboard";
import PollAdd from "./PollAdd";


class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitialData());
    }

    render() {
        const {loading} = this.props;

        if(loading) {
            return (<div>
                <Loading />
            </div>)
        }

    return (
        <Router>
      <div className={'container'}>
          <Nav/>

          <Switch>
              <Route exact path='/' component={Polls} />
              <Route exact path='/leaderboard' component={Leaderboard} />
              <Route exact path='/add' component={PollAdd} />
          </Switch>

      </div>
        </Router>
    )
  }
}

export default connect((state) => ({
    loading: state.loading
}))(App)