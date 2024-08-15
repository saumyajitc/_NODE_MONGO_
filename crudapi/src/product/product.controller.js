import dao from "./product.dao.js";

export const getAllProducts = async (req, res) => {
    const result = await dao.get({}, (err) => {
        if(err) console.log(err);
    })
    res.send(result);
}

export const getProductById = async (req, res) => {
    const result =  await dao.getById({_id:req.params.id}, (err) => {
        if(err) console.log(err);
    })
    res.send(result);
}

export const create = async (req, res) => {
    const product = req.body;
    const result = await dao.create(product, (err) => {
        if(err) console.log(err);
    })
    result && res.status(200).send("Product created succesfully");
}

export const update = async (req, res) => {
    const product = {
        "name": req.body.name,
        "price": req.body.price
    }
    const result = await dao.update({_id:req.params.id}, product, (err) => {
                        if(err) console.log(err);
                    })
    result && res.status(200).send("Product Updated");
}

export const deleteItem = async (req, res) => {
    const result = await dao.delete({_id:req.params.id}, (err) => {
                        if(err) console.log(err);
                    })
    result && res.status(200).send("Product Deleted");
}