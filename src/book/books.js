import { Component } from "react";
import Table from "../table/table";
import axios from 'axios';

class Books extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    book_data: []
  }

  componentDidMount() {
     axios.get(`${process.env.REACT_APP_API_URL}get_all_books`)
    .then(res => {
        const data = res.data;
        this.setState({ book_data : data });
    });
  }

  render() {
    if(!this.state.book_data) 
      return;
    else
    return (
      <>
       <Table table_data={this.state.book_data} 
              table_title='Books'
              table_subtitle='All Books'
              box_title='Books' />
      </>
    );
  }
}

export default Books;
