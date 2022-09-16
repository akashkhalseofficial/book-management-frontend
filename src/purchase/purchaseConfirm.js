import { Component } from "react";
import Table from "../table/table";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable,
  ButtonGroup
} from "adminlte-2-react";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class PurchaseConfirm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    book_data : {},
    quantity : 1,
    order : "purchase",
    total_order_price : 0
  }

  componentDidMount() {
    axios.post(`${process.env.REACT_APP_API_URL}get_book?id=` + this.props.match.params.id , this.props.match.params.id)
    .then(res => {
        const data = res.data;
        this.setState({ book_data : data });
        this.setState({ total_order_price : data.price });
    });
  }

  handleInputChange(event) {
    if(event.target.name == 'quantity' || event.target.name == 'order') {
      document.getElementsByName("total_order_price")[0].value = parseInt(document.getElementsByName("book_data.price")[0].value)
      let bd = this.state.book_data;
      bd.price = parseInt(document.getElementsByName("book_data.price")[0].value)
      this.setState({
        book_data : bd
      });
    }

    const target = event.target;
    const name = target.name;
    this.setState({
        [name] : event.target.value
    });

    let quantity = parseInt(document.getElementsByName("quantity")[0].value);
    let p = parseInt(this.state.book_data.price * quantity);
    let order = "rent"
    if(document.getElementsByName("order")[0].checked) {
      order = "rent";
      this.setState({
        total_order_price : parseInt(p / 10)
      })
    }
    if(document.getElementsByName("order")[1].checked) {
      order = "purchase";
      this.setState({
        total_order_price : parseInt(p)
      })
    }
  }

  saveBook() {
    if (this.state.book_data.order === 'rent' && cookies.get('books_rented') !== undefined) {
      books_rented = parseInt(cookies.get('books_rented')) + this.state.book_data.quantity
    }
    if (this.state.book_data.order === 'purchase' && cookies.get('books_purchased') !== undefined) {
      books_purchased = parseInt(cookies.get('books_purchased')) + this.state.book_data.quantity
    }
    let quantity = parseInt(document.getElementsByName("quantity")[0].value)
    let total_order_price = parseInt(document.getElementsByName("total_order_price")[0].value)
    let order = "rent"
    if(document.getElementsByName("order")[0].checked) {
      order = "rent"
    }
    if(document.getElementsByName("order")[1].checked) {
      order = "purchase"
    }
    let userid = parseInt(cookies.get('userid'));
    let books_purchased = 0;
    let books_rented = 0;
    let payload = {
      quantity: quantity,
      totalorderprice: total_order_price,
      bid : this.state.book_data.id,
      userid: userid,
      image: this.state.book_data.image,
      orderDetails: {
        bid: this.state.book_data.id,
        purchaseType: order,
        image: this.state.book_data.image,
      },
      invoices: {
        bids: this.state.book_data.id,
        userid: userid,
        totalordercost: total_order_price,
        purchaseType: order,
        image: this.state.book_data.image,
      },
      userShelf: {
        bids: this.state.book_data.id,
        userid: userid,
        booksRented: books_rented,
        booksPurchased: books_purchased,
        image: this.state.book_data.image,
      }
    }
    if (order === 'rent') {
      payload['booksRented'] = {
        bid: this.state.book_data.id,
        userid: userid,
        image: this.state.book_data.image,
      }
    } else {
      payload['booksPurchased'] = {
        bid: this.state.book_data.id,
        userid: userid,
        image: this.state.book_data.image,
      }
    }

    axios.post(`${process.env.REACT_APP_API_URL}new_order`, payload)
    .then(res => {
        const data = res.data;
        if( res.status === 201) {
          alert("Order placed successfully.....!");
          window.location.href = "/my-shelf"
        }
    });
  }

  render() {
    if(!this.state.book_data) 
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
                        readOnly="true"
                        value={this.state.book_data.id}
                        name="book_data.id"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Id"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Name</span>
                      <input
                        readOnly="true"
                        value={this.state.book_data.name}
                        name="book_data.name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Author</span>
                      <input
                        readOnly="true"
                        value={this.state.book_data.author}
                        name="book_data.author"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Author"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Language</span>
                      <input
                        readOnly="true"
                        value={this.state.book_data.language}
                        name="book_data.language"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Language"
                        onChange={this.handleInputChange}
                      />
                    </div>  
                    <div className="col col-md-6">
                      <span>Book Pages</span>
                      <input
                        readOnly="true"
                        value={this.state.book_data.pages}
                        name="book_data.pages"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Pages"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Category</span>
                      <input
                        readOnly="true"
                        value={this.state.book_data.category}
                        name="book_data.category"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Category"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Price</span>
                      <input
                        readOnly="true"
                        value={this.state.book_data.price}
                        name="book_data.price"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Quantity"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Rent ( For 7 days )</span>
                      <input
                        style={{'marginLeft' : '10px'}}
                        readOnly="true"
                        value="rent"
                        checked={this.state.order === "rent"}
                        name="order"
                        type="radio"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Purchase</span>
                      <input
                        style={{'marginLeft' : '10px'}}
                        readOnly="true"
                        value="purchase"
                        checked={this.state.order === "purchase"}
                        name="order"
                        type="radio"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Quantity</span>
                      <select className="form-control" name="quantity" id="quantity" 
                      onChange={this.handleInputChange}
                      value={this.state.quantity}
                      >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col col-md-6">
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
                        value="Buy Book"
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

export default PurchaseConfirm;
