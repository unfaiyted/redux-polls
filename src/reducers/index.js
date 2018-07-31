import { combineReducers } from 'redux'

import users from './users'
import polls from './poll'
import loading from './loading'
import authedUser from './authedUser'

export default combineReducers({
    authedUser,
    users,
    polls,
    loading
})