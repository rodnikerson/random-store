import React from 'react'
import { CloseButton, Stack } from 'react-bootstrap'
import { UseAppDispatch } from '../hooks/storeHook';
import { ICart } from '../interface/interfaces';
import { addProductToCart, removeAllOfThisProductFromCart, removeProductFromCart } from '../products/productSlice'

const CartCard = ({ id, image, price, title, quantity }: ICart) => {
    const dispatch = UseAppDispatch();
    return (
        <>
            <Stack direction="horizontal" style={{ background: "#E2DFD2", width: "100%", height: "120px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "10px", position: "relative", fontFamily: "Montserrat" }}>
                <img src={image} alt={title} style={{ height: "100%", width: "35%", objectFit: "cover" }} />
                <h6 style={{ width: "25%", fontSize: "0.6rem" }}>{title}</h6>
                <button className="d-flex justify-content-center align-items-center"
                    style={{ width: "20px", height: "20px", border: "none", background: "white", borderRadius: "2px" }}
                    onClick={() => dispatch(removeProductFromCart({id}))}>-</button>
                <span style={{ fontWeight: "bold", width: 10, display: "flex", justifyContent: "center" }}>{quantity}</span>
                <button className="d-flex justify-content-center align-items-center"
                    style={{ width: "20px", height: "20px", border: "none", background: "white", borderRadius: "2px" }}
                    onClick={() => dispatch(addProductToCart({id, image, price, title}))}>+</button>
                <span style={{ position: "absolute", fontSize: "0.75rem", fontWeight: "bold", right: 10, bottom: 10 }}>${(price * quantity).toFixed(2)}</span>
                <CloseButton onClick={() => dispatch(removeAllOfThisProductFromCart({id}))} style={{ position: "absolute", top: -10, right: -10, border: "1px solid black", backdropFilter: "invert(100%)" }} />
            </Stack>
        </>
    )
}

export default CartCard