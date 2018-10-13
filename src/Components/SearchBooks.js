import React from 'react';
import {search} from '../BooksAPI';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    books: [],
    error: false
  }

  search = query => {
      !query && (query = '');
      search(query, 20).then(result => {
        console.log(result);
        if (result.error) {
          this.setState({
            error: true,
            books: []
          })
        } else {
          result.length > 0 ? (
            this.setState({books: result})
          ) : (
            this.setState({books: []})
          )
        }
      })
  }

  render() {
    const {changeShelf} = this.props;
    const {books, error} = this.state;
    return (
    <div className="search-books">
      <SearchBar
        search={this.search}
      />
      <SearchResults
        error={error}
        books={books}
        changeShelf={changeShelf}
      />
    </div>      
    )
  }
}

export default SearchBooks