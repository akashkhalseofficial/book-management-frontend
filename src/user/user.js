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
import Table from "../table/table";

class User extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user_data: []
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}get_all_users`)
      .then(res => {
        const data = res.data;
        console.log(data)
        this.setState({ user_data : data });
      })
  }

  render() {
    if(!this.state.user_data) 
      return;
    else
    return (
      <>
        <Content
          title="Users"
          subTitle="All users"
          browserTitle="Users"
        >
          <Row>
            <Col xs={12}>
            {/* <Home /> */}
              <Box
                title="All User Data"
                type="primary"
              >
                <table class="table table-striped table-bordered table-hover text-center">
                <thead class="thead-dark">
                  <tr>
                    <th>Id</th>
                    <th>User Name</th>
                    <th>Books Rented</th>
                    <th>Books Purchased</th>
                  </tr>
                  </thead>
                  <tbody>
                {
                  this.state.user_data.map((p, i) => {
                    return(
                      <tr key={'d' + i}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.rented}</td>
                        <td>{p.purchased}</td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default User;
