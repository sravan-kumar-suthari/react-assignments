import "./App.css";
import NavigationBar from "./components/NavigationBar";
import RegistrationForm from "./components/user/RegistrationForm";
import { Container } from "react-bootstrap";
import AllUsersPage from "./components/user/AllUsersPage";
import { Switch, Route } from "react-router-dom";
import EditUser from "./components/user/EditUser";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import Home from "./components/user/Home";
import Footer from "./components/user/Footer";
import React from "react";
import axios from "axios";

export const ProductContext = React.createContext();
function App() {
  const initialValues = {
    products: [
      {
        product: "",
        specification: "",
        review: "",
        discount: "",
        price: "",
        rating: "",
        offers: "",
      },
    ],
  };
  const [products, setProducts] = React.useState(initialValues.products);
  React.useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    // <Container>
    //   <NavigationBar />
    //   <Switch>
    //     <Route path="/" exact component={AllUsersPage} />
    //     <Route path="/Register" component={RegistrationForm} />
    //     <Route path="/edituser/:id" component={EditUser} />
    //   </Switch>
    // </Container>

    <div>
      <ProductContext.Provider value={products}>
        <Navbar fixed="top" expand="lg" bg="primary" variant="dark">
          <Navbar.Brand className="pointer">Products Inventory</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={"col-md-6"} style={{ display: "flex" }}>
              <Form.Control
                className="search-field"
                type="text"
                placeholder="Search Product"
              />
              <Button
                className="btn-hover"
                variant="light"
                style={{
                  border: "1px solid #ced4da",
                  marginLeft: "5%",
                  float: "right",
                }}
              >
                Search
              </Button>
            </div>
            <Nav style={{ marginLeft: "auto" }}>
              <Nav.Link className="c-wh">About</Nav.Link>
              <Nav.Link className="c-wh">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-56">
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
