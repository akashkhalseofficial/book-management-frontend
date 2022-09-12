import { Component } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
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
      <>
        <div class="login-box">
          <div class="login-logo"></div>
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Sign in</p>
              <form>
              <div class="col col-md-6">
                      <span>Username</span>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Password</span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  <div class="col col-md-6">
                  <input
                        type="submit"
                        onClick={(e) => {
                          this.login(e)
                        }}
                        value="Sign In"
                      />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  login(e) {
      e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}login` , this.state)
        .then(res => {
          if (res.status != 200) {
            alert('Try with correct username or password.');
          } else {
            if (!res.data.length) {
              alert('Try with correct username or password.');
            } else {
              const data = res.data[0];
              cookies.set('userLoggedIn', "true", { path: '/' });
              cookies.set('address', data.address, { path: '/' });
              cookies.set('email', data.email, { path: '/' });
              cookies.set('name', data.name, { path: '/' });
              cookies.set('userid', data.userid, { path: '/' });
              cookies.set('username', data.email, { path: '/' });
              cookies.set('wallet', data.wallet, { path: '/' });
              if (data.username == 'admin') {
                window.location.href = '/admin'
              } else {
                window.location.href = '/'
              }
            }
          }
        }).catch(e => {
          console.log(e)
        });
  }
}

export default Login;
