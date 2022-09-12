import { Component } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable,
} from "adminlte-2-react";
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
    axios.post(`${process.env.REACT_APP_API_URL}get_user` , cookies.get('userid'))
      .then(res => {
        const data = res.data;
        this.setState({ user_data : data });
      })
  }

  render() {
    if(!this.state.profile_data) 
      return;
    else
    return (
      <>
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
                
                <div class="col col-md-6">
                    <span class="col col-md-6 underline">User Name</span>
                    <label class="col col-md-6">{this.state.profile_data.name}</label>
                </div>
                <div class="col col-md-6">
                    <span class="col col-md-6 underline">Gender</span>
                    <label class="col col-md-6">{this.state.profile_data.gender}</label>
                </div>
                <div class="col col-md-6">
                    <span class="col col-md-6 underline">Address</span>
                    <label class="col col-md-6">{this.state.profile_data.address}</label>
                </div>
                <div class="col col-md-6">
                    <span class="col col-md-6 underline">Wallet Balance</span>
                    <label class="col col-md-6">{this.state.profile_data.wallet}</label>
                </div>
                <div class="col col-md-6">
                    <span class="col col-md-6 underline">Books Rented</span>
                    <label class="col col-md-6">{this.state.profile_data.rented}</label>
                </div>
                <div class="col col-md-6">
                    <span class="col col-md-6 underline">Books Purchased</span>
                    <label class="col col-md-6">{this.state.profile_data.purchased}</label>
                </div>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default UserProfile;
