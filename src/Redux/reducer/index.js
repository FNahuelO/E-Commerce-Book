import { GET_BOOKS, GET_BOOK, ADD_CART, REMOVE_ALL, CLEAR_CART, REMOVE_BOOK, ADD_LOCAL } from "../actions"

const initialState = {
    books: [],
    book: {},
    carrito: [] 
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
        case ADD_CART:
            return {
                ...state,
                carrito: [...state.carrito, action.payload]
            }
        case ADD_LOCAL:
            const products = [...state.carrito, action.payload] 
            window.localStorage.setItem("carrito",JSON.stringify(products))
            return {
                ...state
            }          
        case REMOVE_BOOK:
            return {
                ...state,
                carrito: state.carrito.filter(book => book.id !== action.payload)
            }
        case CLEAR_CART: 
            return {
                ...state,
                carrito: []
            }
        default:
            return state
    }
}

export default rootReduce