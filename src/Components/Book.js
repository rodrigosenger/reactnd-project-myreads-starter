import React from 'react';
import {PropTypes} from 'prop-types';
import BookShelfChanger from './BookShelfChanger';
import {get} from '../BooksAPI';

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  state = {
    bookShelf: ''
  }

  async componentDidMount() {
    const book = await get(this.props.book.id);
    this.setState({bookShelf: book.shelf});
  }

  render() {
    const {book, changeShelf} = this.props;
    const {bookShelf} = this.state;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail })` }}></div>
          <BookShelfChanger
            book={book}
            changeShelf={changeShelf}
            bookShelf={bookShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;