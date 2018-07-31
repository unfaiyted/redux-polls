import React from 'react';
import connect from "react-redux/es/connect/connect";
import {getPercentage} from "../utils/helpers";
import {handleAddAnswer} from "../actions/answers";

const getVoteKeys = () => ['aVotes','bVotes','cVotes','dVotes'];

class Poll extends React.Component {

    handleAnswer = (answer) => {
        const { poll, authedUser } = this.props;
        this.answered = true;

        console.log("answer: ",answer);

        this.props.dispatch(handleAddAnswer({
            authedUser,
            id : poll.id,
            answer
        }));

    };

    render() {

        if(this.props.poll === null) {
            return (<div><p>This poll does not exist</p></div>)
        };

        const {poll, authorAvatar, vote, } = this.props;

        const totalVotes = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);

        return (
            <div className={'poll-container'}>
            <h1 className={'question'}>{poll.question}</h1>
                <div className={'poll-author'}>By: <img src={authorAvatar} className={'avatar'} /></div>

                <ul>
                    {
                        ['aText','bText','cText','dText'].map((key) => {

                            const count = poll[key[0] + 'Votes'].length;

                            return <li

                                onClick={() => {
                                    if (vote === null && !this.answered) {
                                        this.handleAnswer(key[0])
                                    }
                                }}
                                className={`option ${vote === key[0] ? 'chosen' : ''}`}
                                key={key}>

                                { vote === null
                                ? poll[key]
                                : <div className={'result'}>
                                        <span>{poll[key]}</span>
                                        <span>{getPercentage(count, totalVotes)}% ({count})</span>
                                    </div>}
                                    </li>
                        })
                    }
                    <li></li>

                </ul>


            </div>
        )
    }
}
function mapStateToProps({authedUser, polls, users}, props) {

    const matchId = props.match.params.id;
    const poll = polls[matchId];

    if(!poll) {
         return {
            poll: null
            }
    }

    //vote part
    const vote = getVoteKeys().reduce((vote, key) => {
        if (vote !== null) {
            return vote[0];
        }
        // if user already voted
        return poll[key].includes(authedUser)
            ? key
            : vote
        }, null);


    return {
            poll,
            vote,
            authedUser,
            authorAvatar: users[poll.author].avatarURL
    };

}

export default connect((mapStateToProps))(Poll)
