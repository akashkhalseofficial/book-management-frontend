import { Component } from "react";
import Table from "../table/table";
import axios from 'axios';
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable
} from "adminlte-2-react";

import BookTile from "../book/bookTile";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class MyShelf extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    book_data: [],
    bid_data: []
  }

  async componentDidMount() {
    let book_data = []
    axios.post(`${process.env.REACT_APP_API_URL}get_user_shelf/{id}?userid=` + cookies.get("userid"), cookies.get("userid"))
    .then(async res => {
      const data = res.data;
      book_data = res.data;
      for (let index = 0; index < book_data.length; index++) {
        let bid_data = [];
        let book = await this.getBookData(book_data[index]['bids'])
          bid_data.push(book.data)
          if(index == book_data.length - 1) {
            this.setState({ book_data : book_data })
            this.setState({ bid_data : bid_data });
          }
      }
    });
  }

  getBookData(bid) {
    return axios.post(`${process.env.REACT_APP_API_URL}get_book?Id=`+bid , bid).then( r => r)
  }

  render() {
    if(!this.state.book_data) 
      return;
    else
    return (
      <div className="bg-image">
       <Content 
              title='My Shelf'
              subTitle='Books in my shelf'
              browserTitle='My Shelf' 
              
        >
          <Row>
            <Col xs={12}>
            <Box
                title="My Shelf"
                type="primary"
              >
                {this.state.bid_data.map((p, i) => {
                  return(
                      <Col md={3} sm={4} xs={6}>
                        <BookTile book_data={p}/>
                      </Col>
                    )
                  })
                }
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default MyShelf;
