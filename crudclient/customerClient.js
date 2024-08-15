const axios = require("axios");
const customerApiUrl = "http://localhost:5500/customersapi/customers";

// call getCustomer using axios
const getCustomers = () => {
    axios.get(customerApiUrl).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call getCustomeryId using axios
const getCustomerById = () => {
    axios.get(`${customerApiUrl}/66b44cee1f3c80f41795e2d2`).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call saveCustomer using axios
const saveCustomer = () => {
    const customer = { "name": "Clark Kent", "email": "clark.kent@example.com" }
    axios.post(customerApiUrl, customer).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call updateCustomer using axios
const updateCustomer = () => {
    const customer = { "name": "Clark Kent", "email": "clark.kent@example.email.com"  }
    axios.put(`${customerApiUrl}/66b4e3128f307f9b97664492`, customer).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// call deleteCustomer using axios
const deleteCustomer = () => {
    axios.delete(`${customerApiUrl}/66b4e3128f307f9b97664492`).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err);
    })
}

// getCustomers();
// getCustomerById();
saveCustomer();
// updateCustomer();
// deleteCustomer();
