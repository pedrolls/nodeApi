const mongoose = require('mongoose');

const Product =  mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 8});

        return res.json(products);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.jason(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.jason(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.jason(product);
    },

    async destroy(req,res){
        await Product.findOneAndRemove(req.params.id);

        res.send();
    }
};
