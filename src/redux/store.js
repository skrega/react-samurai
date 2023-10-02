import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 9,
                },
                {
                    id: 2,
                    message: 'Its my first post',
                    likesCount: 12,
                },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [{
                    id: 1,
                    name: 'Dimych',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png'
                },
                {
                    id: 2,
                    name: 'Andrey',
                    img: 'https://tlgrm.ru/_/stickers/edf/93b/edf93b50-40fd-4211-ac88-fbcdae551b99/10.jpg'
                },
                {
                    id: 3,
                    name: 'Julik',
                    img: 'https://cdn-icons-png.flaticon.com/256/1473/1473875.png'
                },
                {
                    id: 4,
                    name: 'Arina',
                    img: 'https://emojigraph.org/media/google/flushed-face_1f633.png'
                }
            ],
            messages: [{
                    id: 1,
                    message: 'hi'
                },
                {
                    id: 2,
                    message: 'How is your it-kamasutra?'
                },
                {
                    id: 3,
                    message: 'Yo'
                }
            ],
            newMessageBody: ''
        },
        sidebar: {},
    },
    _callSubscriber() { // метод
        console.log('State changed')
    },
    getState() {
        return this._state; // this === store, this это владелец store
    },
    subscribe(observer) {
        this._callSubscriber = observer // observer - паттер === addEventListener
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        
        this._callSubscriber(this._state)
    }

}


export default store;
window.state = store