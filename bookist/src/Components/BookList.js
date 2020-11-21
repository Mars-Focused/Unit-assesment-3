import React from 'react'
import Books from './Books'

function BookList(props){

    let mappedBooks = props.Books.map((element, index) => {
        return <Books/>
    })

    return <div className="booklist">
        <h1>BookList</h1>
        <Books/>
    </div>
}

export default BookList