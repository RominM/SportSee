import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data"

export async function getMainData(id) {
    const mainData = USER_MAIN_DATA.find(item => item.id === Number(id))
    return mainData
}

export async function getPoidsData(userId) {
    const poidsData = USER_ACTIVITY.find(item => item.userId === Number(userId))
    return poidsData.sessions
}

export async function getObjectifsData(userId) {
    const objectifsData = USER_AVERAGE_SESSIONS.find(item => item.userId === Number(userId))
    return objectifsData.sessions
}

export async function getPerformanceData(userId) {
    const performanceData = USER_PERFORMANCE.find(item => item.userId === Number(userId))
    return performanceData
}