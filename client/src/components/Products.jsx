import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-bootstrap/Alert';

import { add } from "../reducer/cartSlice";
import { getProducts } from "../reducer/productSlice";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StatusCode from "../utils/StatusCode";
// import { Alert } from "@mui/material";


const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);

    useEffect(() => {
        // dispatch an action for fetchProduct
        dispatch(getProducts());
        // fetch(url)
        //     .then((data) => data.json())
        //     .then((result) => getProducts(result));
    }, []);

    // promise returns 3 state
    if(status === StatusCode.LOADING) {
        return <p style={{ marginLeft: '200px', marginTop:"200px"}}>
        Loading...
      </p>
    }
    if(status === StatusCode.ERROR) {
        return <Alert key="danger" variant="danger"style={{marginTop: '12.5em'}} >
        {/* <Alert.Heading style={{paddingLeft: '12.5em'}}>Something went wrong!! Please try again later.</Alert.Heading> */}
        Something went wrong!! Please try again later.
      </Alert>
    }


    const addToCart = (products) => {
        // dispatch an add action
        dispatch(add(products));
    }
/**/
    const cards = products.map((product) => (
        <div className="col-md-2" style={{marginBottom:'15px', marginLeft: '1.5em'}}>
            <Card key={product.id} className="h-100">
            <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{ width: '170px', height: '200px'}} />
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>INR: {product.price}</Card.Text>
                <Button onClick={() => addToCart(product)} variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>
        </div>
    )); 
// onClick={() => addToCart(product)} ::: this 'product' I want to add my cart
    return (
        <>
            <h1>Product Dashboard</h1>
            <div style={{marginTop: '6em', display: 'flex', flexWrap:'wrap',  marginLeft: '1.5em'}}>
                {cards}            
            </div>
            
            
        </>
    )
}

export default Product;



