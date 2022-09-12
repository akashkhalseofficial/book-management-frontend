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

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bname: "",
      bauthor: "",
      bprice: "",
      blanguage: "",
      bquantity: "",
      bpages: "",
      bcategory: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <>
        <Content
          title="Dashboard"
          subTitle="Courier Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
              <Box
                title="New Book"
                type="primary">
                <form>
                  <div class="form-row">
                    <div class="col col-md-6">
                      <span>Book Name</span>
                      <input
                        name="bname"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Author</span>
                      <input
                        name="bauthor"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Author"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Price</span>
                      <input
                        name="bprice"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Price"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Language</span>
                      <input
                        name="blanguage"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Language"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Quantity</span>
                      <input
                        name="bquantity"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Quantity"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Pages</span>
                      <input
                        name="bpages"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Pages"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Category</span>
                      <input
                        name="bcategory"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Category"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
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
                          this.saveBook(e);
                        }}
                        value="Save Book"
                      />
                  </div>
                </form>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: event.target.value,
    });
  }

  saveBook(event) {
    event.preventDefault();
    let payload = this.state;
    if (!(parseInt(payload.bprice) && parseInt(payload.bquantity) && parseInt(payload.bpages))) {
      alert('Price Quantity and Pages must be numbers');
    } else {
      payload.bprice = parseInt(this.state.bprice);
      payload.bquantity = parseInt(this.state.bquantity);
      payload.bpages = parseInt(this.state.bpages);
      axios.get(`${process.env.REACT_APP_API_URL}add_new_book`, payload)
      .then(res => {
          if (res.status === 200) {
              alert(res.data);
              window.location.href = '/books';
          }
      })
    }
  }
}

export default Book;
