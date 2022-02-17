export const getMainData = async (id) => {
    const response = await fetch("http://localhost:3000/user/" + id)
    const data = await response.json()
    return data.data
}

export const getPoidsData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/activity")
    const data = await response.json()
    return data.data.sessions
}

export const getObjectifsData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/average-sessions")
    const data = await response.json()
    return data.data.sessions
}

export const getPerformanceData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/performance")
    const data = await response.json()
    return data.data
}