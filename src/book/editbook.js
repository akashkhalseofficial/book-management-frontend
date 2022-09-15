import { Component } from "react";
import Table from "../table/table";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable
} from "adminlte-2-react";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {}

  componentDidMount() {
    var self = this;
    axios.get(`${process.env.REACT_APP_API_URL}get_book/${this.props.match.params.id}`)
    .then(res => {
        self.setState({...res.data});
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  saveBook() {
    let payload = {
        name: this.state.name,
        language: this.state.language,
        category: this.state.category,
        author:this.state.author,
        pages: this.state.pages,
        price: this.state.price,
        stock: this.state.stock,
        booksStock: {
          category: this.state.category,
          stock: this.state.stock
        }
      };
      if (!(parseInt(payload.price) && parseInt(payload.stock) && parseInt(payload.pages))) {
        alert('Price Quantity and Pages must be numbers');
      } else {
        payload.price = parseInt(this.state.price);
        payload.stock = payload.booksStock.stock = parseInt(this.state.stock);
        payload.pages = parseInt(this.state.pages);
        console.log(payload);
        axios.put(`${process.env.REACT_APP_API_URL}update_book/${this.props.match.params.id}`, payload)
        .then(res => {
            if(res.status === 204) {
                alert("Book Updated successfully");
                window.location.href = "/"
            }
        });
      }
  }

  render() {
    if(!this.state) 
      return;
    else
    return (
      <div className="bg-image">
        <Content
          title="New Order"
          subTitle="Order new Book"
          browserTitle="New Order"
        >
          <Row>
            <Col xs={12}>
            <Box
                title="Order Book"
                type="primary"
              >
                <Box
                title="New Book"
                type="primary">
                <form>
                  <div className="form-row">
                    <div className="col col-md-6">
                      <span>Book Id</span>
                      <input
                        value={this.state.id}
                        readOnly="true"
                        name="id"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Id"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Name</span>
                      <input
                        value={this.state.name}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Author</span>
                      <input
                        value={this.state.author}
                        name="author"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Author"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Language</span>
                      <input
                        value={this.state.language}
                        name="language"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Language"
                        onChange={this.handleInputChange}
                      />
                    </div>  
                    <div className="col col-md-6">
                      <span>Book Pages</span>
                      <input
                        value={this.state.pages}
                        name="pages"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Pages"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Category</span>
                      <input
                        value={this.state.category}
                        name="category"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Category"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Price</span>
                      <input
                        value={this.state.price}
                        name="price"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Quantity"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/'
                      }}
                      value="Back to Dashboard"
                    />
                      <input
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                          this.saveBook(e);
                        }}
                        value="Update Book"
                      />
                  </div>
                </form>
              </Box>
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default EditBook;
