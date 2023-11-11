import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '51b62d54-7206-491e-ac9b-10a5791532bc'
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)  
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    // getProfileStatus(userId) {
    //     return instance.get(`profile/status/${userId}`)
    //         .then(response => response.data)
    // }
}

// export const followUnfollowAPI = {
export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}