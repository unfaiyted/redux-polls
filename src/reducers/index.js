import { combineReducers} from 'redux'

import users from './users'
import polls from './poll'
import loading from './loading'


export default combineReducers({
    users,
    polls,
    loading
})