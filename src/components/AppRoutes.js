import React from 'react';

import Polls from "./Polls";
import Poll from "./Poll"
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
                    <Route path='/poll' component={Poll} />
                </Switch>

        )
    }

}


export default AppRoutes;
