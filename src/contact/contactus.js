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

class Contact extends Component {
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
                title="Parcel Data"
                type="primary"
              >
                <div>Contact Us</div>
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default Contact;
