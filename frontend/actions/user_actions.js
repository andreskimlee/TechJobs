export const RECEIVE_USER = "RECEIVE_USER";
export const FETCH_ALL_JOBS = "FETCH_ALL_JOBS";

import * as USERUtil from "../util/user_api_util";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user 
});

export const fetchJobs = (jobs) => ({
    type: FETCH_ALL_JOBS,
    jobs 
})


export const updateUserAction = (userId, formData) => dispatch => {
    return USERUtil.updateUser(userId, formData)
        .then(user => dispatch(receiveUser(user)))
}

export const fetchAllJobs = () => dispatch => {
    return USERUtil.fetchAllJobs().then(jobs => dispatch(fetchJobs(jobs)))
}

export const searchJobs = ({description, location, fullTime}) => dispatch => {
    debugger 
    return USERUtil.searchJobs(description, location, fullTime).then(jobs => dispatch(fetchJobs(jobs)))
}
