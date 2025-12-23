import axios from "axios";

const apiStore = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

apiStore.interceptors.response.use(
    (response) => response.data, 
    (error) => {
        console.info('API error:', 
        {
            message: error.message,
            status: error.response?.status,
        });
        return Promise.reject(error);
    }
);

export async function getList() {
    try {
        return await apiStore.get('/products');    
    } catch (error) {
        console.log('Error en el servicio getList');
    }
}

export async function getProduct(id) {
    try {
        return await apiStore.get(`/products/${ id }`);
    } catch (error) {
        console.log('Error en el servicio getProduct');
    }
}

export async function getCart() {
    try {
        const cart = await apiStore.get('/carts/1');

        const productsCart = await Promise.all(
            cart.products.map(async (item) => {
                const product = await getProduct(item.productId);

                return {
                    ...product,
                    quantity: item.quantity
                };
            })
        );

        return productsCart;
              
    } catch (error) {
        console.log('Error en el servicio getCart')   
    }
}

export async function setCart (id) {
    try {
        const cart = { 
            userId: 1, 
            products: [{ id: id }] 
        };

        await apiStore.post(`/carts`, cart);
        
        console.log('Add Item');
    } catch (error) {
        console.log('Error en el servicio setCart');
    }
}