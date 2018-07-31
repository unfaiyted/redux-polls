import React from "react";

const LeaderboardUser = (props) =>{
    return (
        <li key={props.leader.id} className={'user'}>
            <img className={'avatar'} src={props.leader.avatarURL}/>
            <div>
                <h1>{props.leader.name}</h1>
                <p>{props.leader.pollsCount} Polls</p>
                <p>{props.leader.answersCount} Answers</p>
            </div>
        </li>
    )
};

export default LeaderboardUser;