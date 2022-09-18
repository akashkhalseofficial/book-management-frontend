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
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Invoice extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    invoice_data: [],
    book_data : []
  }

  componentDidMount() {
    axios.post(`${process.env.REACT_APP_API_URL}get_invoices/{id}?userid=` + cookies.get("userid"), cookies.get("userid"))
    .then(res => {
        const data = res.data;
        // for (let index = 0; index < res.data.length; index++) {
        //   const element = array[index];
        //   axios.get(`${process.env.REACT_APP_API_URL}get_?userid=` + cookies.get("userid"), cookies.get("userid"))
        //     .then(res => {
        //         const data = res.data;
        //         this.setState({ invoice_data : data });
        //     });
        // }
        this.setState({ invoice_data : data });
    }).catch ( e => {
      console.log(e)
    })
  }

  render() {
    if(!this.state.invoice_data || !this.state.invoice_data.length) 
      return;
    else
    return (
      <div className="bg-image">
        <Content
          title="Dashboard"
          subTitle="Bookworm Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
              <Box
                title="Invoices"
                type="primary"
              >
                {
                  this.state.invoice_data.map((p, i) => {
                    return(
                      <Box
                        title={p.id}
                        type="secondary"
                        collapsable="true"  key={i+'books'}>
                        <div className="col col-md-6">
                          <span className="col col-md-6 underline">Invoice Id</span>
                          <label className="col col-md-6">{p.id}</label>
                        </div>
                        <div className="col col-md-6">
                          <span className="col col-md-6 underline">User email</span>
                          <label className="col col-md-6">{p.useremail}</label>
                        </div>
                        <div className="col col-md-6">
                          <span className="col col-md-6 underline">User address</span>
                          <label className="col col-md-6">{p.useraddress}</label>
                        </div>
                        <div className="col col-md-6">
                          <span className="col col-md-6 underline">Book Id</span>
                          <label className="col col-md-6">{p.bids}</label>
                        </div>
                        <div className="col col-md-6">
                          <span className="col col-md-6 underline">Purchase Type</span>
                          <label className="col col-md-6">{p.purchaseType}</label>
                        </div>
                        <div className="col col-md-6">
                          <span className="col col-md-6 underline">Total Order Cost</span>
                          <label className="col col-md-6">{p.totalordercost}</label>
                        </div>
                      </Box>
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

export default Invoice;
