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
      <div className="bg-image">
        <div className="login-box">
          <div className="login-logo">Login</div>
          <div className="card">
            <div className="card-body login-card-body">
              {/* <p className="login-box-msg">Sign in</p> */}
              <form>
              <div className="col col-md-6">
                      <span>Username</span>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col col-md-6">
                      <span>Password</span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  <div className="col col-md-6">
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
      </div>
    );
  }

  login(e) {
      e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}login` , this.state)
        .then(res => {
          if (!res.data) {
            alert('Try with correct username or password.');
          } else {
            let userid = res.data;
              axios.get(`${process.env.REACT_APP_API_URL}get_user/` + userid)
              .then(res => {
                if (res.data) {
                  const data = res.data;
                  cookies.set('userLoggedIn', "true", { path: '/' });
                  cookies.set('address', data.address, { path: '/' });
                  cookies.set('email', data.email, { path: '/' });
                  cookies.set('name', data.name, { path: '/' });
                  cookies.set('userid', userid, { path: '/' });
                  cookies.set('username', data.username, { path: '/' });
                  cookies.set('wallet', data.wallet, { path: '/' });
                  cookies.set('books_rented', 0, { path: '/' });
                  cookies.set('books_purchased', 0, { path: '/' });
                  if (data.userShelf !== null) {
                    cookies.set('books_rented', data.userShelf.booksRented, { path: '/' });
                    cookies.set('books_purchased', data.userShelf.booksPurchased, { path: '/' });
                  }
                  if (data.name == 'admin') {
                    window.location.href = '/'
                  } else {
                    window.location.href = '/'
                  }
                }
              })
          }
        }).catch(e => {
          console.log(e)
        });
  }
}

export default Login;
