import React from 'react';
import LeaderboardUser from "./LeaderboardUser";
import connect from "react-redux/es/connect/connect";


class Leaderboard extends React.Component {
    render() {
        const leaders = this.props.leaders;
        return (
            <div>
                <ul>
                {
                    leaders.map((leader) => {
                        return <LeaderboardUser leader={leader} key={leader.id} />
                    })
                }
                </ul>

            </div>
        )
    }
}

function mapStateToProps({ users }) {

    const leaders = [];

    Object.keys(users).map((key, i) => {
        return  leaders.push({
            id: users[key].id,
            name: users[key].name,
            avatarURL: users[key].avatarURL,
            pollsCount: users[key].polls.length,
            answersCount: users[key].answers.length
        });
    });

    return {
        leaders
    }
}


export default connect(mapStateToProps)(Leaderboard)


