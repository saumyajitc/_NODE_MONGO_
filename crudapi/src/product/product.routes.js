import { getAllProducts, getProductById, create, update, deleteItem } from "./product.controller.js";

const ROUTES = (router) => {
    router.get('/products', getAllProducts);
    router.get('/products/:id', getProductById);
    router.post('/products', create);
    router.put('/products/:id', update);
    router.delete('/products/:id', deleteItem);
}

export default ROUTES