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

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    parcels: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/parcels`)
      .then(res => {
        const parcels = res.data;
        this.setState({ parcels });
      })
  }

  render() {
    if(!this.state.parcels || !this.state.parcels.length) 
      return;
    else
    return (
      <>
        <Content
          title="Dashboard"
          subTitle="Book Management Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
            {/* <Home /> */}
              <Box
                title="Parcel Data"
                type="primary"
              >
                <div>About Us</div>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default AboutUs;