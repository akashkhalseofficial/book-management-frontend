import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  Navbar
} from "adminlte-2-react";
import Dashboard from "./dashboard/dashboard";
import Register from "./register/register";
import Login from "./login/login";
import ContactUs from "./contact/contactus";
import AboutUs from "./aboutus/aboutus";
import User from "./user/user";
import Invoice from "./invoice/invoice";
import Purchase from "./purchase/purchase";
import Books from "./book/books";
import Book from "./book/book";
import Cookies from 'universal-cookie';
import UserProfile from "./user/userProfile";
const cookies = new Cookies();

const { Item, Header, UserPanel, Searchbar } = Sidebar;

function App() {

  const isSignedIn = cookies.get('userLoggedIn') === 'true' ? true : false;

  const API_URL = process.env.REACT_APP_API_URL;
  console.log(API_URL)

  const adminSidebar = [
    <Item key="dashboard" text="Dashboard" to="/" icon="far-folder" />,
    <Item key="books" text="Books" to="/books" icon="far-folder" />,
    <Item key="new_book" text="Add new Book" to="/new-book" icon="far-folder" />,
    <Item key="users" text="Users" to="/users" icon="far-folder" />,
    <Item key="books_rented" text="Books Rented" to="/books-rented" icon="far-folder" />,
    <Item key="books_purchased" text="Books Purchased" to="/books-purchased" icon="far-folder" />,
  ]

  const sidebar = [
    <Item key="order" text="Books Shelf" to="/new-order" icon="far-folder" />,
    <Item key="shelf" text="My Shelf" to="/" icon="far-folder" />,
    <Item key="invoice" text="Invoices" to="/invoice" icon="far-folder" />,
    <Item key="profile" text="Profile" to="/profile" icon="far-folder" />,
    // <Item key="track" text="Contact Us" to="/contact-us" icon="far-folder" />,
    // <Item key="track" text="About Us" to="/about-us" icon="far-folder" />
  ];

  const userPanel = [

  ]

  return (

    isSignedIn ? (
      <>
        <AdminLTE
          title={["Book ", "Management"]}
          titleShort={["B", "M"]}
          theme="blue"
          sidebar={
            cookies.get('username') === 'admin' ? adminSidebar : sidebar
          }
          >
            <Navbar.Core>
              <li style={{ "margin" : "15px;"}} onClick={(e) => {
                          e.preventDefault();
                          document.cookie = "userLoggedIn=false;";
                          window.location.href = "/login";
                        }}>Sign Out</li>
            </Navbar.Core>
            <Dashboard exact path="/" />
            {/* <Parcel exact path="/parcels" />
            <NewParcel exact path="/new_parcel" />
            <ViewParcel exact path="/parcel/:id" />
          <UpdateParcel exact path="/parcel/update/:id" /> */}
            <Register exact path="/register" />
            <Book exact path="/new-book" />
            <Books exact path="/books" />
            <Books exact path="/books" />
            <Books exact path="/books-rented" />
            <Books exact path="/books-purchased" />
            <Invoice exact path="/invoice" />
            <Purchase exact path="/new-order" />
            <Purchase exact path="/confirm-order" />
            <User exact path="/users" />
            <Login exact path="/login"/>
            <ContactUs exact path="/contact-us" />
            <AboutUs exact path="/about-us" />
            <UserProfile exact path="/profile" />
        </AdminLTE>
      </>
    ) : 
    <Login exact path="/login" />

  );
}

export default App;
