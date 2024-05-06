const productList = require("../store/productData");
const HttpError = require('../model/error')
const schema = require('../model/validationModel')

const productListController = (req,res) => {

    try{
        res.json(productList)
        res.status(200);
    }catch(err){
        return  next(new HttpError("something broken due that product list not getting fetch",500));
    }

}

const placeOrderController = (req,res,next) => {

    try{
        const { error } = schema.validate(req.body);

        if (error) {
            throw error
        }

        res.status(200).json({message:"your order is placed"})

    }catch(error){
       return next(new HttpError(error.details[0].message))

    }
}


exports.productListController = productListController;
exports.placeOrderController = placeOrderController;

