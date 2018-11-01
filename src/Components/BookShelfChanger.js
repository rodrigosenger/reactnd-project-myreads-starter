import React from 'react';
import {PropTypes} from 'prop-types';

class BookShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    bookShelf: PropTypes.string
  }

  render() {
    const {book, changeShelf, bookShelf} = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={bookShelf ? bookShelf : 'none'} onChange={(event) => changeShelf(book, event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;