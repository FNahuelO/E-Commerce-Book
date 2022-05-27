import React from 'react'
import Card from './Card/Card';
import style from './Books.module.css';

export function Books({ books }) {
  return (
    <div className={style.container}>
      { books?.map(book => <Card 
          id= {book.id}
          ISBN = {book.volumeInfo.industryIdentifiers?.[0]}
          img = {book.volumeInfo.imageLinks?.thumbnail}
          name = {book.volumeInfo.title}
          price= {book.saleInfo.listPrice ? `$ ${book.saleInfo.listPrice.amount}` : 'NOT PRICE'}
          author = {book.volumeInfo.authors && book.volumeInfo.authors[0]}
          editorial = {book.volumeInfo.publisher}
      />)
      }
      </div>
  )
}

export default Books;