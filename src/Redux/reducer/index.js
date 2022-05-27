import { GET_BOOKS, GET_BOOK } from "../actions"

const initialState = {
    books: [],
    book: {}
}

const rootReduce = (state = initialState, action ) => {
    switch(action.type){
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case GET_BOOK:
            return {
                ...state,
                book: action.payload
            }

        default:
            return state
    }
}

export default rootReduce