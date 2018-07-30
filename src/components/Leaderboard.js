import React from 'react';
import LeaderboardUser from "./LeaderboardUser";
import connect from "react-redux/es/connect/connect";


class Leaderboard extends React.Component {
    render() {
        const users = this.props.users;
        return (
            <div>
                {
                    Object.keys(users).map((key, i) => {
                        return <LeaderboardUser user={users[key]} />
                    })
                }


            </div>
        )
    }
}

export default connect((state) => ({
    users: state.users
}))(Leaderboard)


