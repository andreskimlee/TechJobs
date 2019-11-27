export const RECEIVE_USER = "RECEIVE_USER";
export const FETCH_ALL_JOBS = "FETCH_ALL_JOBS";
export const FETCH_JOB = "FETCH_JOB"

import * as USERUtil from "../util/user_api_util";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user 
});

export const fetchJobs = (jobs) => ({
    type: FETCH_ALL_JOBS,
    jobs 
})

export const fetchSingleJob = (job) => ({
    type: FETCH_JOB,
    job
})


export const updateUserAction = (userId, formData) => dispatch => {
    return USERUtil.updateUser(userId, formData)
        .then(user => dispatch(receiveUser(user)))
}

export const fetchAllJobs = () => dispatch => {
    return USERUtil.fetchAllJobs().then(jobs => dispatch(fetchJobs(jobs)))
}

export const fetchJob = (jobId) => dispatch => {
    return USERUtil.fetchJob(jobId).then(job => dispatch(fetchSingleJob(job)))
}

export const searchJobs = ({description, location, fullTime, pages}) => dispatch => {
    debugger 
    return USERUtil.searchJobs(description, location, fullTime, pages).then(jobs => dispatch(fetchJobs(jobs)))
}
