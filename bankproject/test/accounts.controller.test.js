const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const req_url = "http://localhost:8000/accountsapi"

describe('Accounts API Controller Functions', () => {
    it("Get all Accounts", () => {
        return chai.request(req_url)
                .get('/accounts')
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Get a single Account", () => {
        return chai.request(req_url)
                .get('/accounts/66b4d78a815ddf97a377a680')
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Create an Account", () => {
        return chai.request(req_url)
                .post('/accounts')
                .send({ "firstName": "Snehanshn", "lastName": "Chowdhury", "email": "sneh.chow@example.com" })
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Update an Account", () => {
        return chai.request(req_url)
                .put('/accounts/66b4d7a3815ddf97a377a682')
                .send({ "firstName": "Snehanshn", "lastName": "Chowdhury", "email": "snehanshn.chow@example.com", })
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

    it("Delete an Account", () => {
        return chai.request(req_url)
                .delete('/accounts/66b4d7a3815ddf97a377a682')
                .then((res) => {
                    expect(res).to.have.status(200);
                }).catch(err => {
                    throw err
                })
    })

})