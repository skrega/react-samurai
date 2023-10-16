const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-beaver-on-white-background_194935-62.jpg',
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus'
        //     },
        //     followed: false
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://koshka.top/uploads/posts/2021-12/1640316382_1-koshka-top-p-narisovannikh-kotikov-1.jpg',
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {
        //         city: 'Moscow',
        //         country: 'Belarus'
        //     },
        //     followed: true
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://flomaster.top/uploads/posts/2022-07/thumbs/1656832433_44-flomaster-club-p-milie-risunki-korgi-krasivo-44.png',
        //     fullName: 'Yulik',
        //     status: 'I am a mamaboss',
        //     location: {
        //         city: 'Vladivostok',
        //         country: 'Russia'
        //     },
        //     followed: true
        // },
    ],
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u
                    })
                }
                case SET_USERS: { 
                    return { ...state, users: [...state.users, ...action.users] } 
                }
                default:
                    return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId})
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;