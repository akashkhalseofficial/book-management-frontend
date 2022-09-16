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
import UserProfile from "./user/userProfile";
import MyShelf from "./user/myshlef";
import PurchaseConfirm from "./purchase/purchaseConfirm";
import EditBook from "./book/editbook"; 
import AudioBooks from "./book/audiobooks";
import TextBooks from "./book/textbooks";
import Cookies from 'universal-cookie';
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
    <Item key="textbooks" text="Textbooks" to="/text-books" icon="far-folder" />,
    <Item key="audiobooks" text="Audiobooks" to="/audio-books" icon="far-folder" />,
    <Item key="about-us" text="About us" to="/about-us" icon="far-folder" />,
    <Item key="contact-us" text="Contact us" to="/contact-us" icon="far-folder" />,
  ]

  const sidebar = [
    <Item key="order" text="Books Shelf" to="/books-shelf" icon="far-folder" />,
    <Item key="shelf" text="My Shelf" to="/my-shelf" icon="far-folder" />,
    <Item key="invoice" text="Invoices" to="/invoice" icon="far-folder" />,
    <Item key="profile" text="Profile" to="/profile" icon="far-folder" />,
    <Item key="textbooks" text="Textbooks" to="/text-books" icon="far-folder" />,
    <Item key="audiobooks" text="Audiobooks" to="/audio-books" icon="far-folder" />,
    <Item key="about-us" text="About us" to="/about-us" icon="far-folder" />,
    <Item key="contact-us" text="Contact us" to="/contact-us" icon="far-folder" />,
  ];

  const normalUser = [
    <Item key="login" text="Login" to="/login" icon="far-folder" />,
    <Item key="register" text="Register" to="/register" icon="far-folder" />,
    <Item key="about-us" text="About us" to="/about-us" icon="far-folder" />,
    <Item key="contact-us" text="Contact us" to="/contact-us" icon="far-folder" />,
  ];
  
  return (

    cookies.get('userLoggedIn') === 'true' ? (
      <>
        <AdminLTE
          title={["Book ", "Worm"]}
          titleShort={["B", "M"]}
          theme="blue"
          sidebar={
            cookies.get('username').indexOf('admin') >= 0 ? adminSidebar : sidebar
          }
          >
            <Navbar.Core>
              <li style={{ "margin" : "15px"}} className="color-white">Welcome {cookies.get('username')}</li>
              <li style={{ "margin" : "15px"}} className="color-white cursor-pointer" onClick={(e) => {
                          e.preventDefault();
                          cookies.remove('username');
                          cookies.remove('userLoggedIn');
                          cookies.remove('address');
                          cookies.remove('email');
                          cookies.remove('name');
                          cookies.remove('userid');
                          cookies.remove('wallet');
                          window.location.href = "/login";
                        }}>Sign Out</li>
            </Navbar.Core>
            <Dashboard exact path="/" />
            <Register exact path="/register" />
            <Book exact path="/new-book" />
            <Books exact path="/books" />
            <EditBook exact path="/book/edit/:id" />
            <PurchaseConfirm exact path="/book/buy/:id" />
            <Books exact path="/books-rented" />
            <Books exact path="/books-purchased" />
            <Invoice exact path="/invoice" />
            <Purchase exact path="/books-shelf" />
            <Purchase exact path="/confirm-order" />
            <User exact path="/users" />
            <ContactUs exact path="/contact-us" />
            <AboutUs   exact path="/about-us" />
            <UserProfile exact path="/profile" />
            <MyShelf exact path="/my-shelf" />
            <TextBooks exact path="/text-books" />
            <AudioBooks exact path="/audio-books" />
        </AdminLTE>
      </>
    )    : (
    <AdminLTE
          title={["Book ", "Worm"]}
          titleShort={["B", "M"]}
          theme="blue"
          sidebar={
            normalUser
          }
          >
            <Login exact path="/"/>
            <Login exact path="/login"/>
            <Register exact path="/register"/>
          </AdminLTE>
    )
  );
}

export default App;
