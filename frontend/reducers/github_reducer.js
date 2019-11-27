import { FETCH_ALL_JOBS, FETCH_JOB } from "../actions/user_actions"
import {merge} from 'lodash'
export default function friendshipReducer (state={}, action) {
    Object.freeze(state); 
    switch (action.type) {
        case FETCH_ALL_JOBS: 
            return merge({}, action.jobs);
        default:
            return state; 
    }
}