import { combineReducers } from 'redux'

import users from './users'
import polls from './poll'
import loading from './loading'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    polls,
    loadingBar: loadingBarReducer
})