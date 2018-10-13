import React from 'react'
import './App.css'
import BooksList from './Components/BooksList';
import SearchBooks from './Components/SearchBooks';
import {getAll, update} from './BooksAPI';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  changeBookShelf = (newBook, newShelf) => {
    update(newBook, newShelf).then(response => {
        newBook.shelf = newShelf;

        let updatedBooks = this.state.books.filter(book => book.id !== newBook.id);
        updatedBooks.push(newBook);
        this.setState({ books: updatedBooks })
    })
  }

  render() {
    const {books} = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList
            books={books}
            changeShelf={this.changeBookShelf}
          />
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks
            changeShelf={this.changeBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
