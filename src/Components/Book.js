import React from 'react'

const Book = (props) => {
  return (
    <div className="book" key={props.book.id}>
      <img className="book-cover" src={props.book.img} />
      <div className="book-text">
        <h2>{props.book.title} by {props.book.year}</h2>
      </div>
    </div>
  )
}
export default Book