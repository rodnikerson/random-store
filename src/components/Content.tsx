import React, { FC, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { UseAppDispatch, useAppSelector } from '../hooks/storeHook'
import { getProducts } from '../products/productSlice';
import ProductCard from './ProductCard';
import SidebarCart from './SidebarCart';
import SkelletonLoader from './SkelletonLoader';

const Content: FC = () => {
    const dispatch = UseAppDispatch();
    const { cart, products } = useAppSelector((state) => state.products.data)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    console.log("products", products, "cart", cart)
    return (
        <>
            <Row xs={1} md={2} lg={4} className="g-3 p-3" style={{ background: "#404040", width: "100%", margin: "0", minHeight: "calc(100vh - 64px - 2rem)" }}>
                {products.length ? products.map(product => {
                    return (
                        <Col key={product.id}>
                            <ProductCard {...product} />
                        </Col>
                    )
                }) :
                    <SkelletonLoader />}
            </Row>
            <SidebarCart />
        </>
    )
}

export default Content