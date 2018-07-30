import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'


class PollStatusNav extends React.Component {
    render() {
        return (
            <div className={'nav'}>
                <ul>
                <li>Answered</li>
                <li>Unanswered</li>
                </ul>
            </div>
        )
    }
}



class Polls extends React.Component {

    render() {
        const polls = this.props.polls;

        return (
            <div>
                <PollStatusNav/>
                <ul>
                {Object.keys(polls).map((key, index) => {
                    return (
                     <li>
                         <Link to={'/poll/' + key}>
                            {polls[key].question}
                        </Link>
                     </li>
                    )
                })
                }
                </ul>
            </div>
        )
    }
}


export default connect((state) => ({
    polls: state.polls
}))(Polls)
