import { Component } from "react";
import Books from "../book/books";
import User from "../user/user";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {}

  componentDidMount() {
    if (cookies.get('username') !== 'admin') {
      window.location.href = "/books"
    }
  }

  render() {
    return (
      <div className="bg-image">
       <Books />
       <User />
      </div>
    );
  }
}

export default Dashboard;
