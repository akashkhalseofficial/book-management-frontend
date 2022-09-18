import { Component } from "react";
import axios from 'axios';

class BookTile extends Component {
  constructor(props) {
    super(props);
}

state = {
    book_data : this.props.book_data
}

componentDidMount() {
    // this.state = this.props.book_data;
    this.setState({book_data : this.props['book_data']});
  }

  render() {
    if(!this.state.book_data)
    return false
    else
    return (
      <a className="book-tile">
                <div className="book-image">
                    <img src={'/images/' + this.state.book_data.image} />
                </div>
                <div className="book-details">
                    <div className="col-5">
                        <span className="mt10">Book Id</span>
                        <label>{this.state.book_data.id}</label>
                    </div>
                    <div className="col-5">
                        <span className="mt10">Book Price</span>
                        <label>INR {this.state.book_data.price}</label>
                    </div>
                    <div className="col">
                        <span className="mt10">Book Name</span>
                        <label>{this.state.book_data.name}</label>
                    </div>
                    <div className="col ">
                        <span className="mt10">Book Author</span>
                        <label>{this.state.book_data.author}</label>
                    </div>
                    
                    <div className="col">
                        <span className="mt10">Book Language</span>
                        <label>{this.state.book_data.language}</label>
                    </div>
                    <div className="col">
                        <span className="mt10">Book Pages</span>
                        <label>{this.state.book_data.pages}</label>
                    </div>
                    <div className="col">
                        <span className="mt10">Book Category</span>
                        <label>{this.state.book_data.category}</label>
                    </div>
                </div>
            </a>
    );
  }
}

export default BookTile;
