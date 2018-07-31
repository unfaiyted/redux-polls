import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import PollAdd from "./PollAdd";


class PollItems extends React.Component {

    render() {
        const { items } = this.props;
        return(
            <ul>
                { items.map( (item) => {
                    return   <li key={item.id}>{item.question}</li>
                })}

            </ul>
        )
    }
}


class Polls extends React.Component {
    state = {
        showAnswered: false
    };

    showUnanswered = () => {
        this.setState(() => ({
            showAnswered: false
        }))
    };

    showAnswered = () => {
        this.setState(() => ({
            showAnswered: true
        }))
    }

    render() {
        const { showAnswered } = this.state;
        const { answered, unanswered } = this.props;
         return (
            <div>

                <div className={'dashboard-toggle nav'}>
                    <ul>
                        <li className={showAnswered === true ? 'active' : null }
                            onClick={() => this.showAnswered()}>Answered</li>
                        <li  className={showAnswered === false ? 'active' : null }
                            onClick={() => this.showUnanswered()}>Unanswered</li>
                    </ul>
                </div>


                    <PollItems items={showAnswered === false ? unanswered : answered}/>



            </div>
        )
    }
}

function mapStateToProps({authedUser, polls, users}) {

    const answers = users[authedUser].answers;

    const answered = answers.map((id) => polls[id])
        .sort((a,b) => a.timestamp - b.timestamp);  // sort chronological

    const unanswered = Object.keys(polls)
        .filter((id) => !answers.includes(id))
        .map((id) => polls[id])
        .sort((a,b) => b.timestamp - a.timestamp);


    return {
        answered,
        unanswered,
    };
}


export default connect((mapStateToProps))(Polls)
