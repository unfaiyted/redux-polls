import React from "react";

const LeaderboardUser = (props) =>{
    return (
        <div key={props.user.id} className={'user'}>
            <img className={'avatar'} src={props.user.avatarURL}/>
            <h1>{props.user.name}</h1>
            <p># Polls</p>
            <p># Answers</p>
        </div>
    )
};

export default LeaderboardUser;