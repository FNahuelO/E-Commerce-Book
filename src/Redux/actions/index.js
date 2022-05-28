import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOK = 'GET_BOOK';
export const ADD_CART = 'ADD_CART';
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const REMOVE_ALL = 'REMOVE_ALL'
export const CLEAR_CART = 'CLEAR_CART'
export const ADD_LOCAL = 'ADD_LOCAL'

export const getBooks = (title) => {
    return async dispatch => {
        try {
            const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&key=${process.env.REACT_APP_APIKEY}`);
            dispatch({ type: GET_BOOKS, payload: books.data.items})
        } catch (error) {
            console.los(error)
        }
    }
}

export const getBook = (id) => {
    return async dispatch => {
        try {
            const book = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
            dispatch({ type: GET_BOOK, payload: book.data})
        } catch (error) {
            console.los(error)
        }
    }
}

export const addCart = (book) => {
    return dispatch => {
        dispatch({type: ADD_CART, payload: book})
    }
}

export const removeBook = (id) => {
    return dispatch => {
        dispatch({type: REMOVE_BOOK, payload: id})
    } 
}

export const addLocal = (product) => {
    return dispatch => {
        dispatch({type: ADD_LOCAL, payload:product })
    }
}

export const clearCart = () => {
    return dispatch => {
        dispatch({type: CLEAR_CART})
    }
}