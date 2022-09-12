import { Component } from "react";
import Books from "../book/books";
import User from "../user/user";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state ={}

  componentDidMount() {
  }

  render() {
    return (
      <>
       <Books />
       <User />
      </>
    );
  }
}

export default Dashboard;
