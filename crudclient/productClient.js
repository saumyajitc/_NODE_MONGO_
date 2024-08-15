const axios = require("axios");
const productApiUrl = "http://localhost:5500/productsapi/products";

// call getProducts using axios
const getProducts = () => {
    axios.get(productApiUrl).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call getProductById using axios
const getProductById = () => {
    axios.get(`${productApiUrl}/66b4df428f307f9b97664485`).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call saveProduct using axios
const saveProduct = () => {
    const product = { "name": "Earpods", "price": 650 }
    axios.post(productApiUrl, product).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call updateProduct using axios
const updateProduct = () => {
    const product = { "name": "Airpods", "price": 650 }
    axios.put(`${productApiUrl}/66b4df428f307f9b97664485`, product).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call deleteProduct using axios
const deleteProduct = () => {
    axios.delete(`${productApiUrl}/66b4df428f307f9b97664485`).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// getProducts();
// getProductById();
saveProduct();
// updateProduct();
// deleteProduct();
