import React from "react";

const LeaderboardUser = (props) =>{
    return (
        <div key={props.leader.id} className={'user'}>
            <img className={'avatar'} src={props.leader.avatarURL}/>
            <h1>{props.leader.name}</h1>
            <p>{props.leader.pollsCount} Polls</p>
            <p>{props.leader.answersCount} Answers</p>
        </div>
    )
};

export default LeaderboardUser;