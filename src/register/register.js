import { Component } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          "name": "",
          "username": "",
          "password": "",
          "email": "",
          "wallet": 0,
          "address": ""
        };
    this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
        const isSignedIn = cookies.get('userLoggedIn') === 'true' ? true : false
        if (isSignedIn) {
            window.location.href = '/';
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
        [name]: event.target.value,
        });
      }

  render() {
    return (
      <div className="bg-image">
        <div className="login-box">
          <div className="login-logo">Register</div>
          <div className="card">
            <div className="card-body login-card-body">
              {/* <p className="login-box-msg">Register</p> */}
              <form>
              <div className="col">
                      <span>Name</span>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
              <div className="col">
                      <span>Username</span>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <span>Password</span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <span>Email</span>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <span>Address</span>
                      <input
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  <div className="col col-md-6">
                  <input
                        type="submit"
                        onClick={(e) => {
                          this.register(e)
                        }}
                        value="Register"
                      />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  register(e) {
      e.preventDefault();
      let payload = {
        "name": this.state.name,
        "username": this.state.username,
        "userCreds": {
          "username": this.state.username,
          "password": this.state.password
        },
        "email": this.state.email,
        "wallet": 1000,
        "address": this.state.address
      }
        axios.post(`${process.env.REACT_APP_API_URL}register` , payload)
        .then(res => {
          if (!res.data) {
            alert('Try with correct username or password.');
          } else {
            if(res.status === 201) {
              alert("Registertaion completed successfully. Please login to continue.");
              window.location.href = '/login';
            }
          }
        }).catch(e => {
          console.log(e)
        });
  }
}

export default Register;
