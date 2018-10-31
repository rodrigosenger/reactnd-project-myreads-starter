import React from 'react';
import {PropTypes} from 'prop-types';

class BookShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const {book, changeShelf} = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => changeShelf(book, event.target.value)}>
          <option id={`move_${book.id}`} value="move" disabled>Move to...</option>
          <option id={`currentlyReading_${book.id}`} value="currentlyReading">Currently Reading</option>
          <option id={`wantToRead_${book.id}`} value="wantToRead">Want to Read</option>
          <option id={`read_${book.id}`} value="read">Read</option>
          <option id={`none_${book.id}`} value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;