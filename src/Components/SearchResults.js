import React from 'react';
import {PropTypes} from 'prop-types';
import SEARCH_TERMS from '../SEARCH_TEMS.js';
import Book from './Book';

class SearchResults extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
  }

  render() {
    const {books, changeShelf, error} = this.props;
    const emptyResults = !books.length

    return (
      <div className="search-books-results">
        {!emptyResults && (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id} className="book">
                <Book 
                  book={book}
                  changeShelf={changeShelf}  
                />
              </li>
            ))}          
          </ol>
        )}
        {emptyResults && (
          <ul>
            {error && (<h3>Provide a valid term.</h3>)}
            <h3>Use one of the terms listed below:</h3>
            {SEARCH_TERMS.map((searchTerm) => (
              <li>{searchTerm}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default SearchResults;