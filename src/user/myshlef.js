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


class MyShelf extends Component {
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
       <Content 
              title='My Shelf'
              subTitle='Books in my shelf'
              browserTitle='My Shelf' 
        >
          <Row>
            <Col xs={12}>
            <Box
                title={this.state.box_title}
                type="primary"
              >
                <table className="table table-striped table-bordered table-hover text-center">
                <thead className="thead-dark">
                  <tr>
                    <th>Book Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Language</th>
                    <th>Quantity</th>
                    <th>Pages</th>
                    <th>Category</th>
                  </tr>
                  </thead>
                  <tbody>
                {
                  this.state.book_data.map((p, i) => {
                    return(
                      <tr key={'d' + i}>
                        <td>{p.bid}</td>
                        <td>{p.bname}</td>
                        <td>{p.bauthor}</td>
                        <td>{p.bprice}</td>
                        <td>{p.blanguage}</td>
                        <td>{p.bquantity}</td>
                        <td>{p.bpages}</td>
                        <td>{p.bcategory}</td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default MyShelf;
