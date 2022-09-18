import { Component } from "react";
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
import PurchaseConfirm from "./purchaseConfirm";
import BookTile from "../book/bookTile";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Purchase extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    book_data : [],
    confirmData : {},
    confirm : false
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}get_all_books`)
    .then(res => {
        const data = res.data;
        this.setState({ book_data : data });
    });
  }

  buy(id) {
    console.log(id)
    window.location.href = "/book/buy/" + id;
  }

  render() {
    if(!this.state.book_data) 
      return;
    else
    return (
      <div className="bg-image">
        <Content
          title="Books shelf"
          subTitle="Order book from below shelf"
          browserTitle="Books shelf"
        >
          <Row>
            <Col xs={12}>
            <Box
                title="Order Book"
                type="primary"
              >
                {this.state.book_data.map((p, i) => {
                  return(
                      <Col md={3} sm={4} xs={6}  key={i+'books'}>
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
            </Col>
          </Row>
        </Content>
      </div>
    )
  }
}

export default Purchase;
