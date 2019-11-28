export const updateUser = (userId, formData) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const fetchUser = userId => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}`
    })
}

export const fetchAllJobs = () => {
    return $.ajax({
        method: "GET",
        url: "https://jobs.github.com/positions.json?",
        dataType: 'json'
    })
}

export const fetchJob = (jobId) => {
    return $.ajax({
        method: "GET", 
        url: `https://jobs.github.com/positions/${jobId}.json`,
        dataType: 'json'
    })
}

export const searchJobs = (description, location, fullTime, pages) => {
    debugger 
    return $.ajax({
        
        method: "GET",
        url: `https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${location}&page=${pages}`,
        dataType: 'json'
    })
}