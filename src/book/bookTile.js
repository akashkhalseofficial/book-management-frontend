import { Component } from "react";
import axios from 'axios';

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from "adminlte-2-react";

class BookTile extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.book_data;
    this.setState({...props['book_data']})
  }

  render() {
    return (
      <a className="book-tile">
                <div className="book-image">
                    <img src={'/images/' + this.state.image} />
                </div>
                <div className="book-details">
                    <div className="col-5">
                        <span className="mt10">Book Id</span>
                        <label>{this.state.id}</label>
                    </div>
                    <div className="col-5">
                        <span className="mt10">Book Price</span>
                        <label>INR {this.state.price}</label>
                    </div>
                    <div className="col">
                        <span className="mt10">Book Name</span>
                        <label>{this.state.name}</label>
                    </div>
                    <div className="col ">
                        <span className="mt10">Book Author</span>
                        <label>{this.state.author}</label>
                    </div>
                    
                    <div className="col">
                        <span className="mt10">Book Language</span>
                        <label>{this.state.language}</label>
                    </div>
                    <div className="col">
                        <span className="mt10">Book Pages</span>
                        <label>{this.state.pages}</label>
                    </div>
                    <div className="col">
                        <span className="mt10">Book Category</span>
                        <label>{this.state.category}</label>
                    </div>
                </div>
            </a>
    );
  }
}

export default BookTile;
