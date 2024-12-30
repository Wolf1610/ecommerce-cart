import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { remove } from '../reducer/cartSlice';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Cart = () => {

    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
      // dispatch a remove action
      dispatch(remove(id));
    }

    const cards = products.map((product) => (
      <div className="col-md-2" style={{marginBottom:'15px', marginLeft: '1.5em'}}>
      <Card key={product.id} className="h-100">
      <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '170px', height: '200px'}} />
      </div>
      <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Button onClick={() => removeFromCart(product.id)} variant="danger">Remove</Button>
      </Card.Body>
      </Card>
      </div>
    )); 
    return (
      // Remember {cards}, not pass here <Cart />, you are by mistake wrote it(<Cart />) okay.
        <div className='d-flex flex-wrap' style={{marginTop: '6em', display: 'flex', flexWrap:'wrap', marginLeft: '1.5em'}}>
          {cards}            
        </div>
    )
}

export default Cart;        

