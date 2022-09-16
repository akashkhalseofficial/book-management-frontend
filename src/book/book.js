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
      "name": "",
      "language": "",
      "category": "",
      "author": "",
      "image": "",
      "pages": 0,
      "price": 0,
      "stock": 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="bg-image">
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
                  <div className="form-row">
                    <div className="col col-md-6">
                      <span>Book Name</span>
                      <input
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
                        name="author"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Author"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Image Name</span>
                      <input
                        name="image"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book image name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Price</span>
                      <input
                        name="price"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Price"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Language</span>
                      <input
                        name="language"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Language"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Quantity</span>
                      <input
                        name="stock"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Quantity"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Book Pages</span>
                      <input
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
                        name="category"
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Category"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    {/* <div>
                    <input type="file" onChange={this.onFileChange} />
                      <button onClick={this.onFileUpload}>
                        Upload!
                      </button>
                    </div> */}
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
      </div>
    );
  }

  // onFileChange = event => {
  //   this.setState({ selectedFile: event.target.files[0] });  
  // };
  
  // onFileUpload = () => {
  //     const formData = new FormData();
  //   formData.append(
  //     "myFile",
  //     this.state.selectedFile,
  //     this.state.selectedFile.name
  //   );
    
  //     console.log(this.state.selectedFile);
  //   // axios.post("api/uploadfile", formData);
  // };

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  saveBook(event) {
    event.preventDefault();
    let payload = {
      name: this.state.name,
      language: this.state.language,
      category: this.state.category,
      author:this.state.author,
      image: this.state.image,
      pages: this.state.pages,
      price: this.state.price,
      stock: this.state.stock,
      booksStock: {
        category: this.state.category,
        stock: this.state.stock,
        image: this.state.image,
      }
    };
    if (!(parseInt(payload.price) && parseInt(payload.stock) && parseInt(payload.pages))) {
      alert('Price Quantity and Pages must be numbers');
    } else {
      payload.price = parseInt(this.state.price);
      payload.stock = payload.booksStock.stock = parseInt(this.state.stock);
      payload.pages = parseInt(this.state.pages);
      console.log(payload);
      axios.post(`${process.env.REACT_APP_API_URL}add_new_book`, payload)
      .then(res => {
          if (res.status === 201) {
              console.log(res.data);
              if(payload.category.toLowerCase() === 'textbook') {
                window.location.href = '/text-books';
              }
              else {
                window.location.href = '/audio-books';

              }
          }
      }).catch(e => console.log(e))
    }
  }
}

export default Book;
