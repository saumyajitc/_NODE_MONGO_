import chai from "chai";
import chaiHttp from "chai-http";
const expect = chai.expect;
chai.use(chaiHttp);

const req_url = "http://localhost:5500/productsapi";

describe('Product API Controller Functions', () => {
    it("Get all Products", () => {
        return chai.request(req_url)
                .get('/products')
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Get a single Product", () => {
        return chai.request(req_url)
                .get('/products/66b43e8b6b1743564c8c575d')
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Create a Product", () => {
        return chai.request(req_url)
                .post('/products/')
                .send({ "name": "Earpods", "price": 650})
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Update a Product", () => {
        return chai.request(req_url)
                .put('/products/66b4e1128f307f9b9766448e')
                .send({ "name": "Airpods", "price": 550})
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Delete a Product", () => {
        return chai.request(req_url)
                .delete('/products/66b4e1128f307f9b9766448e')
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

})