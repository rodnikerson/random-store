import React from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { CartCheckFill } from 'react-bootstrap-icons'
import { UseAppDispatch, useAppSelector } from '../hooks/storeHook'
import { clearCart, sidebarToggler } from '../products/productSlice'
import CartCard from './CartCard'

const SidebarCart = () => {
    const dispatch = UseAppDispatch()
    const { sidebar } = useAppSelector(state => state.products)
    const { cart } = useAppSelector(state => state.products.data)
    let totalPrice: number = 0
    for (let i = 0; i < cart.length; i++) {
        totalPrice += (cart[i].price * cart[i].quantity)
    }
    return (
        <>
            <Offcanvas show={sidebar} onHide={() => dispatch(sidebarToggler(sidebar))} placement="end" style={{ background: "#505050" }}>
                <Offcanvas.Header style={{ paddingTop: "25px", paddingBottom: "25px" }} closeButton>
                    <Offcanvas.Title className="d-flex justify-content-center align-items-center gap-4">
                        <CartCheckFill /> Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack style={{ gap: "25px" }}>
                        {cart.map(product => {
                            return (
                                <CartCard {...product} />
                            )
                        })}
                    </Stack>
                    <div style={{width: "400px", display: "flex", justifyContent: "center", position: "fixed", bottom: 25, right: 0}}>
                        <Button style={{ width: "250px" }} onClick={() => dispatch(clearCart(totalPrice))}>BUY FOR ${totalPrice.toFixed(2)}</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SidebarCart