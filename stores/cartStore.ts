import type {ICart, IProduct} from "~/types/interfaces";

export const useCartStore = defineStore('cart', () => {
    let cart = ref<ICart>({})

    function setItemToCart(product: IProduct) {
        if (cart.value[product.id]) {
            cart.value[product.id].quantity++;
        } else {
            cart.value[product.id] = { product, quantity: 1 }; 
        }
    }

    function removeItemFromCart(product: IProduct) {
        if (cart.value[product.id]) {
            cart.value[product.id].quantity--;
            if (cart.value[product.id].quantity <= 0) {
                delete cart.value[product.id]; 
            }
        }
    }

    function deleteItemFromCart(productId: number) {

        if (cart.value[productId]) {
            delete cart.value[productId];
        }
    }

    function getCartItems() {
        return Object.values(cart.value); 
    }

    return { cart, setItemToCart, removeItemFromCart, getCartItems, deleteItemFromCart }
})