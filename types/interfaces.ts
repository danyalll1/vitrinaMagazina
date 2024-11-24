interface IProduct {
    id: number;
    title: string;
    price: number;
    description?: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}

interface ICart {
    [id: number]: { product: IProduct; quantity: number };
}

export type { IProduct, ICart }