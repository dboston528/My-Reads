import React from 'react';
import Shelf from './shelf';


class Shelves extends React.Component {
  render () {
    const allBooks=this.props.allBooks;
    const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
    const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
    const read = allBooks.filter(book => book.shelf === "read");
    console.log("I AM HERE", allBooks);
    return (
    <div className="list-books-content">
      <div>
        <Shelf books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf}/>
        <Shelf books={wantToRead} title={"Want to Read"} changeShelf={this.props.changeShelf}/> {/* <Shelf />* want to read*/}
        <Shelf books={read} title={"Read"} changeShelf={this.props.changeShelf}/>{/* <Shelf /> read*/}
      </div>
    </div>

  )


  }

}

export default Shelves;
