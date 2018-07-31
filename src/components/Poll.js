import React from 'react';
import connect from "react-redux/es/connect/connect";


class Poll extends React.Component {

    render() {
        return (
            <div>
            <h1>Poll Title</h1>
                <span>By: (picture)</span>

            </div>
        )
    }
}
function mapStateToProps({authedUser, polls, users}) {


    return {

    };

}

export default connect((mapStateToProps))(Poll)
