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
    }
}

export const followUnfollowAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileUserAPI = {
    getProfileUser(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const authMeAPI = {
    getAuthUserData() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}