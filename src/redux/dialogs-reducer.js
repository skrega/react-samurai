const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: 4,
                message: body
            });
            return state
        default:
            return state
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

export default dialogsReducer;