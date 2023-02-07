export interface IRating {
    rate: number;
    count?: number;
}

export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: IRating
    title: string;
}

export interface ICart {
    id: number;
    price: number;
    image: string;
    quantity: number;
    title: string;
}

export interface IProducts {
    loading: boolean;
    error: null | string;
    data: { cart: [] | ICart[]; products: [] | IProduct[] };
    sidebar: boolean
}