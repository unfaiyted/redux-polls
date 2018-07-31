import React from 'react';

import Polls from "./Polls";
import Leaderboard from "./Leaderboard";
import PollAdd from "./PollAdd";

import { Route, Switch } from 'react-router-dom'


class AppRoutes extends React.Component {

    render() {
        return (

                <Switch>
                    <Route exact path='/' component={Polls}/>
                    <Route exact path='/leaderboard' component={Leaderboard}/>
                    <Route exact path='/add' component={PollAdd}/>
                </Switch>

        )
    }

}


export default AppRoutes;
