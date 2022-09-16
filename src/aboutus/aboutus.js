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

  }

  render() {
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
                title="About us"
                type="primary"
              >
                <div>Bookworm is an Online Library Service platform.</div>
                <br></br>
                <div>Users can buy and rent books of available in the Book Shelfs.</div>
                <br></br>
                <div>Bookworm wants to make the availability of books to the users in an affordable and easy way.</div>
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default AboutUs;
