import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Star } from 'react-bootstrap-icons'
import { UseAppDispatch } from '../hooks/storeHook'
import { IProduct } from '../interface/interfaces'
import { addProductToCart } from '../products/productSlice'

const ProductCard = ({ category, description, id, image, price, rating, title }: IProduct) => {
  const dispatch = UseAppDispatch();
  return (
    <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem', fontFamily: 'Montserrat' }}>
          <Card.Img variant="top" src={image} style={{ objectFit: "contain", height: "200px", padding: "10px" }} />
          <Card.Body>
            <Card.Title style={{ height: "25px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{title}</Card.Title>
            <span className="badge rounded-pill bg-dark d-flex justify-content-center align-items-center" style={{ float: "right", height: "22.5px", width: "4.5rem", fontSize: "1rem" }}>${price}</span>
            <Card.Text className="d-flex align-items-center"><Star style={{ marginRight: "0.4rem" }} /> {rating.rate} / 5</Card.Text>
            <Button variant="primary" style={{ width: "100%" }} onClick={() => dispatch(addProductToCart({ id, image, price, title }))}>ADD TO CART</Button>
          </Card.Body>
        </Card>
    </div>

  )
}

export default ProductCard