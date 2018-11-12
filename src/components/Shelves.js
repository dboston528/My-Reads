import React from 'react';
import Shelf from './shelf';


class Shelves extends React.Component {

  render () {return(
    // shelves
    <div className="list-books-content">
      <div>
        <Shelf />
        <Shelf /> {/* <Shelf />* want to read*/}
        <Shelf />{/* <Shelf /> read*/}
      </div>
    </div>

  )


  }

}

export default Shelves;
