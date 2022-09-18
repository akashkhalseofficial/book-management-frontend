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
import BookTile from "./bookTile";
import Cookies from "universal-cookie";
const cookies = new Cookies();

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

  edit(id) {
    console.log(id)
    window.location.href = "/book/edit/" + id;
  }

  buy(id) {
    console.log(id)
    window.location.href = "/book/buy/" + id;
  }

  delete(id) {
    console.log(id)
    if(window.confirm("Please confirm to delete ?")) {
      axios.delete(`${process.env.REACT_APP_API_URL}delete_book/` + id)
      .then(res => {
          const data = res.data;
          if(res.status === 200) {
            alert("Book deleted successfully...!")
            window.location.reload();
          }
      });
    }
  }

  render() {
    if(!this.state.book_data) 
      return;
    else
    return (
      <div className="bg-image">
       <Content
              title='Books Shelf'
              subTitle='All Books'
              browserTitle='Books Shelf' 
        >
            <Box
                title='Books Shelf'
                >
                {this.state.book_data.map((p, i) => {
                  return(
                      <Col md={3} sm={4} xs={6} key={i+'books'}>
                        <BookTile book_data={p}/>
                        <Col className="text-left">
                          {
                            cookies.get("username") === 'admin' 
                            ? <>
                              <Button name="edit" value="Edit" text="Edit" className="color-edit" onClick={(e) => {
                              this.edit(p.id)
                              }}></Button>
                                  <Button name="delete" value="Delete" text="Delete" className="color-delete" onClick={(e) => {
                                  this.delete(p.id)
                              }}></Button>
                              </> 
                            : <>
                              <Button name="buy" value="Buy" text="Buy" className="color-buy" onClick={(e) => {
                              this.buy(p.id)
                              }}></Button>
                            </>
                          }
                        </Col>
                      </Col>
                    )
                  })
                }
              </Box>
        </Content>
      </div>
    );
  }
}

export default Books;
