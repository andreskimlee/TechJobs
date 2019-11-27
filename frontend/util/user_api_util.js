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
        url: "https://jobs.github.com/positions.json?"
    })
}

export const searchJobs = (description, location, fullTime) => {
    return $.ajax({
        method: "GET",
        url: `https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${location}`
    })
}