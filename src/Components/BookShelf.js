import React from 'react';
import {PropTypes} from 'prop-types';
import Book from './Book';

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const {shelf, books, changeShelf} = this.props;
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book) => (
                  <li key={book.id}>
                    <Book 
                      book={book}
                      changeShelf={changeShelf}  
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default BookShelf;