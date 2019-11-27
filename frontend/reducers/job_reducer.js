import { FETCH_JOB } from "../actions/user_actions"
import {merge} from 'lodash'
export default function friendshipReducer (state={}, action) {
    Object.freeze(state); 
    switch (action.type) {
        case FETCH_JOB:
            return merge({}, action.job)
        default:
            return state; 
    }
}