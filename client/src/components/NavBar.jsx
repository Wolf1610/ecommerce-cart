import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, Outlet } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const NavBar = () => {  

    const cartProducts = useSelector(state => state.cart); // cart is payload here, from store, same name "cart"
    // A function that takes a selector function as its first argument.
    // The selector function is responsible for selecting a part of the Redux store's state or computing derived data.
    

    // pass the length of cartProduct array inside My bar component
    return (
        <>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container>
                    <Navbar.Brand href="#home">Products Page</Navbar.Brand>
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link> 
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    )
}

export default NavBar;
