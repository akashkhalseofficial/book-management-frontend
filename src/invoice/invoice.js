import { Component } from "react";
import axios from 'axios';


import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable,
  C
} from "adminlte-2-react";

class Invoice extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    invoice_data: [
      {
        orderid : 1223,
        name : 'Lord of the Rings',
        category : 'Text Book',
        date : '3241324',
        quantity : 5,
        price : '125'
      },{
        orderid : 1223,
        name : 'Lord of the Rings',
        category : 'Text Book',
        date : '3241324',
        quantity : 5,
        price : '125'
      },{
        orderid : 1223,
        name : 'Lord of the Rings',
        category : 'Text Book',
        date : '3241324',
        quantity : 5,
        price : '125'
      },{
        orderid : 1223,
        name : 'Lord of the Rings',
        category : 'Text Book',
        date : '3241324',
        quantity : 5,
        price : '125'
      }
    ]
  }

  componentDidMount() {
    // axios.get(`http://localhost:3000/parcels`)
    //   .then(res => {
    //     const parcels = res.data;
    //     this.setState({ parcels });
    //   })
  }

  render() {
    if(!this.state.invoice_data || !this.state.invoice_data.length) 
      return;
    else
    return (
      <>
        <Content
          title="Dashboard"
          subTitle="Bookworm Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
            {/* <Home /> */}
              <Box
                title="Invoices"
                type="primary"
              >
                {
                  this.state.invoice_data.map((p, i) => {
                    return(
                      <Box
                        title={p.orderid}
                        type="secondary"
                        collapsable="true">
                         <div class="col col-md-6">
                          <span class="col col-md-6 underline">Book Name</span>
                          <label class="col col-md-6">{p.name}</label>
                        </div>
                        <div class="col col-md-6">
                          <span class="col col-md-6 underline">Book Category</span>
                          <label class="col col-md-6">{p.category}</label>
                        </div>
                        <div class="col col-md-6">
                          <span class="col col-md-6 underline">Purchase Data</span>
                          <label class="col col-md-6">{p.date}</label>
                        </div>
                        <div class="col col-md-6">
                          <span class="col col-md-6 underline">Book Quantity</span>
                          <label class="col col-md-6">{p.quantity}</label>
                        </div>
                        <div class="col col-md-6">
                          <span class="col col-md-6 underline">Book Price</span>
                          <label class="col col-md-6">{p.price}</label>
                        </div>
                      </Box>
                      )
                    })
                  }
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default Invoice;
