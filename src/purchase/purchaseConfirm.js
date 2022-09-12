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
import { parse } from "@fortawesome/fontawesome-svg-core";

class PurchaseConfirm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = this.props.book_data;

  componentDidMount() {
    console.log(this.state);
    this.setState({...this.props.book_data});
    console.log(this.state)
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
    let p = this.state.price * parseInt(this.state.quantity);
    if(this.state.order === 'rent') {
        this.setState({total_order_price : ( parseInt(p) / 10 )})
    } else {
        this.setState({total_order_price : parseInt(p)}) 
    }
    console.log(this.state);
    console.log(this.state.total_order_price)
  }

  saveBook() {
    console.log(this.state)
  }

  render() {
    if(!this.props.book_data) 
      return;
    else
    return (
      <>
       <>
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
                  <div class="form-row">
                    <div class="col col-md-6">
                      <span>Book Id</span>
                      <input
                        readOnly="true"
                        value={this.state.id}
                        name="id"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Id"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Name</span>
                      <input
                        readOnly="true"
                        value={this.state.name}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Author</span>
                      <input
                        readOnly="true"
                        value={this.state.author}
                        name="author"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Author"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Language</span>
                      <input
                        readOnly="true"
                        value={this.state.language}
                        name="language"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Language"
                        onChange={this.handleInputChange}
                      />
                    </div>  
                    <div class="col col-md-6">
                      <span>Book Pages</span>
                      <input
                        readOnly="true"
                        value={this.state.pages}
                        name="pages"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Pages"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Category</span>
                      <input
                        readOnly="true"
                        value={this.state.category}
                        name="category"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Category"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Price</span>
                      <input
                        readOnly="true"
                        value={this.state.price}
                        name="price"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Quantity"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Rent</span>
                      <input
                        style={{'marginLeft' : '10px'}}
                        readOnly="true"
                        value="rent"
                        name="order"
                        type="radio"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Purchase</span>
                      <input
                        style={{'marginLeft' : '10px'}}
                        readOnly="true"
                        value="purchase"
                        name="order"
                        type="radio"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Book Quantity</span>
                      <select className="form-control" name="quantity" id="quantity" onChange={this.handleInputChange} value={this.state.quantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                      </select>
                    </div>
                    <div class="col col-md-6">
                      <span>Total Order Price</span>
                      <input
                        style={{'backgroundColor' : '#72f0fa6e'}}
                        readOnly="true"
                        value={this.state.total_order_price}
                        name="total_order_price"
                        type="text"
                        className="form-control"
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
                            e.preventDefault();
                          this.saveBook(e);
                        }}
                        value="Save Book"
                      />
                  </div>
                </form>
              </Box>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
      </>
    );
  }
}

export default PurchaseConfirm;
