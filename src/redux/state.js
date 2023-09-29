const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({
                id: 4,
                message: body
            });

            this._callSubscriber(this._state)
        }
    }

}
export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNEwMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default store;
window.state = store