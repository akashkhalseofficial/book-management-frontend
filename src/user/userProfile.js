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
} from "adminlte-2-react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    profile_data: {
        name : '',
        gender : '',
        address : '',
        wallet : 0,
        rented : 0,
        purchased : 0
    }
  }

  componentDidMount() {
  }

  render() {
    if(!this.state.profile_data) 
      return;
    else
    return (
      <div className="bg-image">
        <Content
          title="Profile"
          subTitle="Profile data"
          browserTitle="Profile"
        >
          <Row>
            <Col xs={12}>
              <Box
                title="My Profile"
                type="primary"
              >
                
                <div className="col col-md-6">
                    <span className="col col-md-6 underline">User Name</span>
                    <label className="col col-md-6">{cookies.get("username")}</label>
                </div>
                <div className="col col-md-6">
                    <span className="col col-md-6 underline">User Email</span>
                    <label className="col col-md-6">{cookies.get("email")}</label>
                </div>
                <div className="col col-md-6">
                    <span className="col col-md-6 underline">Address</span>
                    <label className="col col-md-6">{cookies.get("address")}</label>
                </div>
                <div className="col col-md-6">
                    <span className="col col-md-6 underline">Wallet Balance</span>
                    <label className="col col-md-6">{cookies.get("wallet")}</label>
                </div>
                <div className="col col-md-6">
                    <span className="col col-md-6 underline">Books Rented</span>
                    <label className="col col-md-6">{cookies.get("books_rented")}</label>
                </div>
                <div className="col col-md-6">
                    <span className="col col-md-6 underline">Books Purchased</span>
                    <label className="col col-md-6">{cookies.get("books_purchased")}</label>
                </div>
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default UserProfile;
