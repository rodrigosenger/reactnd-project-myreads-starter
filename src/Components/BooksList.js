import React from 'react';
import {PropTypes} from 'prop-types';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';

class BooksList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const {books, changeShelf} = this.props;
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const readBooks = books.filter(book => book.shelf === 'read');
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf 
          books={currentlyReadingBooks}
          shelf='Currently Reading'
          changeShelf={changeShelf}
        />
        <BookShelf 
          books={wantToReadBooks}
          shelf='Want to Read'
          changeShelf={changeShelf}
        />
        <BookShelf 
          books={readBooks}
          shelf='Read'
          changeShelf={changeShelf}
        />
        <Link to='/search'>
          <div className="open-search">
            <a>Add a book</a>
          </div>
        </Link>
      </div>
    )
  }
}

export default BooksList;