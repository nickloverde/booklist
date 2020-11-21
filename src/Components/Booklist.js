import React, {Component} from 'react'
import Book from './Book'
import books from '../data'

class Booklist extends Component{
    constructor() {
        super()

        this.state = {
            books: []
        }
        
    }

    render(){
        const mappedBooks = this.state.books.map((element) => {
            return <Book book={element} key={element.id}/>
        })
        return(
            <div className="Booklist">
                books
                {mappedBooks}
            </div>
        )
    }
    
}

export default Booklist