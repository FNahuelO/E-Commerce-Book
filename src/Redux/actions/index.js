import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOK = 'GET_BOOK'

const APIKEY = process.env.REACT_APP_APIKEY

export const getBooks = (title) => {
    return async dispatch => {
        try {
            const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&key=${APIKEY}`);
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