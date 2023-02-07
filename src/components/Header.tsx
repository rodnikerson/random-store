import React, { FC } from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import { Bag } from "react-bootstrap-icons";
import Button from 'react-bootstrap/esm/Button';
import { UseAppDispatch, useAppSelector } from '../hooks/storeHook';
import { sidebarToggler } from '../products/productSlice';

const Header: FC = () => {
    const dispatch = UseAppDispatch()
    const { sidebar } = useAppSelector(state => state.products)

    const { cart } = useAppSelector(state => state.products.data)
    let totalQuantity: number = 0
    for(let i = 0; i < cart.length; i++) {
        totalQuantity += cart[i].quantity
    }
    return (
        <>
            <Navbar style={{background: "#161616"}} expand="xxl">
                <Container>
                    <Navbar.Brand style={{color: "#FFF"}}>Random Store</Navbar.Brand>
                    <Button style={{width: "3rem", height: "3rem"}} className="d-relative border border-2 rounded-circle" onClick={() => dispatch(sidebarToggler(!sidebar))}>
                        <Bag />
                        <div style={{width: "1.5rem", height: "1.5rem", position: "absolute", translate: "calc(50% + 0.5rem) -50%"}} className="rounded-circle bg-success justify-content-center align-items-center variant">
                            {totalQuantity}
                        </div>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header