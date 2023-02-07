import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct, IProducts } from "../interface/interfaces";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (data, thunkApi) => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            return await response.json();
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const initialState: IProducts = {
    loading: false,
    error: null,
    data: { cart: [], products: [] },
    sidebar: false
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            if (state.data.cart.find(product => product.id === action.payload.id) == null) {
                state.data.cart = [...state.data.cart, { ...action.payload, quantity: 1 }]
            } else {
                state.data.cart.map(product => {
                    return product.id === action.payload.id ? { ...product, quantity: product.quantity += 1 } : product
                })
            }
        },
        removeProductFromCart: (state, action) => {
            if (state.data.cart.find(product => product.id === action.payload.id)?.quantity === 1) {
                state.data.cart = state.data.cart.filter(product => product.id !== action.payload.id)
            } else {
                state.data.cart.map(product => {
                    return product.id === action.payload.id ? { ...product, quantity: product.quantity -= 1 } : product
                })
            }
        },
        removeAllOfThisProductFromCart: (state, action) => {
            state.data.cart = state.data.cart.filter(product => product.id !== action.payload.id)
        },
        sidebarToggler: (state, action) => {
            state.sidebar = !state.sidebar
            console.log(state.sidebar)
        },
        clearCart: (state, action) => {
            state.data.cart = []
            alert(`You've bought this items for ${action.payload}`)
        }
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getProducts.fulfilled,
            (state, action: PayloadAction<IProduct[]>) => {
                state.loading = false;
                state.data.products = action.payload;
            }
        );
        builder.addCase(
            getProducts.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }
        );
    }
});

export default productSlice.reducer;

export const { addProductToCart, removeProductFromCart, removeAllOfThisProductFromCart, sidebarToggler, clearCart } = productSlice.actions;
