import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class SearchBar extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }
  
  timer = null

  triggerChange = () => {
    const {search} = this.props;
    const {query} = this.state;
    search(query);
  }

  handleChange = e => {
    clearTimeout(this.timer)

    this.setState({query: e.target.value })

    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
  }

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer)
      this.triggerChange()
    }
  }

  render() {
    const {query} = this.state;
    return (
      <div className="search-books-bar">
        <Link to='/'><a className="close-search">Close</a></Link>
        <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        </div>
      </div>
    )
  }
}

export default SearchBar;