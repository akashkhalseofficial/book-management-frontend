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

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    profile_data: {
        name : 'Akash 1234',
        gender : 'Male',
        address : 'Pune',
        wallet : 250,
        rented : 4,
        purchased : 3
    }
  }

  componentDidMount() {
    // axios.get(`http://localhost:3000/parcels`)
    //   .then(res => {
    //     const parcels = res.data;
    //     this.setState({ parcels });
    //   })
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
            {/* <Home /> */}
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
