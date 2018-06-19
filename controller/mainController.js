// importing required items
const express = require('express');
const mongoose  = require('mongoose');
const logger = require('../library/loggerLib');
const response = require('../library/responseLib');
const check = require('../library/checkLib')
const shortId = require('shortid');

// importing all the models
const productModel = mongoose.model('product');




let create = (req,res)=>{

    ID = shortId.generate();
     let newProduct = new productModel({
         id:ID,
         name:req.body.name,
         category:req.body.category,
         subCategory:req.body.subCategory,
         price:req.body.price,
         detailsHtml:req.body.detailsHtml,
         specification:req.body.specification,
         inStock:req.body.inStock,
         warranty:req.body.warranty,
         addToCart:req.body.addToCart

     })

     newProduct.save((err,result)=>{
         
         if(err){
            logger.error('error while saving','create',10);
            apiResponse =  response.generate(true,'error while saving',404,err);
            res.send(apiResponse);
         }else if(check.isEmpty(result)){
             logger.info('empty result returned');
             apiResponse = response.generate(false,'empty result returned',500,result);
             res.send(apiResponse);
         }else{
             logger.info('Success');
             apiResponse = response.generate(false,'success',200,result);
             res.send(apiResponse);
         }
     })  // end of save

} // end of create

let viewAllProducts = (req,res)=>{
    productModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            logger.error('error while seaching','view all Product',10);
            apiResponse = response.generate(true,'error while searching',404,err);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('empty returned');
            apiResponse = response.generate(false,'empty returned',500,result);
            res.send(apiResponse);
        }else{
            logger.info('success');
            apiResponse = response.generate(false,'success',200,result);
            res.send(apiResponse);
        }
    })
} // end of view all products

let viewProduct = (req,res) =>{
    productModel.findOne({'id':req.params.id})
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            logger.error('error while seaching','viewProduct',10);
            apiResponse = response.generate(true,'error while searching',404,err);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('empty returned');
            apiResponse = response.generate(false,'empty returned',500,result);
            res.send(apiResponse);
        }else{
            logger.info('success');
            apiResponse = response.generate(false,'success',200,result);
            res.send(apiResponse);
        }
    })
} // end of view product


let viewCart = (req,res)=>{
    productModel.find({'addToCart':req.addToCart})
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            logger.error('error while seaching','viewCart',10);
            apiResponse = response.generate(true,'error while searching',404,err);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('empty returned');
            apiResponse = response.generate(false,'empty returned',500,result);
            res.send(apiResponse);
        }else{
            logger.info('success');
            apiResponse = response.generate(false,'success',200,result);
            res.send(apiResponse);
        }
    })
} // end of view cart


let update = (req,res) =>{

    if(check.isEmpty(req.params.id)){
            logger.error(' Id not passed','update',5)
            apiResponse = response.generate(true,'Id not provided',404,null);
            res.send(apiResponse);
    }else{
    let options = req.body;
    productModel.update({'id':req.params.id},options,{multi:true})
    .exec((err,result)=>{
        
        if(err){
            logger.error('error while seaching','update',10);
            apiResponse = response.generate(true,'error while updating',404,err);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('empty returned');
            apiResponse = response.generate(false,'empty returned',500,result);
            res.send(apiResponse);
        }else{
            logger.info('success');
            apiResponse = response.generate(false,'success',200,result);
            res.send(apiResponse);
        }

    })
}
} // end of update

// add product to cart
let addProductToCart = (req,res) =>{
    if(check.isEmpty(req.params.id)){
        logger.error(' Id not passed','update',5)
        apiResponse = response.generate(true,'Id not provided',404,null);
        res.send(apiResponse);
}else{

productModel.findOne({'id':req.params.id})
.exec((err,result)=>{
    if(err){
        logger.error('error while searching','add product to cart',10);
        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
        res.send(apiResponse)
    } else if(check.isEmpty(result)){
        logger.info('empty returned');
        apiResponse = response.generate(false,'empty returned',500,result);
        res.send(apiResponse);
    } else{
        result.addToCart = true;
        result.save((err,result)=>{
            if(err){
                logger.error('error occured','save',10);
                let apiResponse = response.generate(true, 'error while saving',500,err);
                res.send(apiResponse);
            }else{
                logger.info('success');
                let apiResponse = response.generate(false,'Successfully added product to cart',200,result);
                res.send(apiResponse);
            }
        }) // end result save
    }
})
}
} // end of add product to cart


let viewByCategory = (req,res) =>{
    productModel.find({'category':req.params.category})
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            logger.error('error while seaching','view by category',10);
            apiResponse = response.generate(true,'error while updating',404,err);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('empty returned');
            apiResponse = response.generate(false,'no such category exits',500,result);
            res.send(apiResponse);
        }else{
            logger.info('success');
            apiResponse = response.generate(false,'success',200,result);
            res.send(apiResponse);
        }
    })
} // end of view by category

let viewBySubCategory = (req,res) =>{
    productModel.find({'subCategory':req.params.subCategory})
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            logger.error('error while seaching','view by sub category',10);
            apiResponse = response.generate(true,'error while updating',404,err);
            res.send(apiResponse);
        }else if(check.isEmpty(result)){
            logger.info('empty returned');
            apiResponse = response.generate(false,'no such sub category exists',500,result);
            res.send(apiResponse);
        }else{
            logger.info('success');
            apiResponse = response.generate(false,'success',200,result);
            res.send(apiResponse);
        }
    })
}  // end of view by sub sategory



let deleteProduct = (req,res) =>{
    if(check.isEmpty(req.params.id)){
        logger.error('id not passed','update',5)
        apiResponse = response.generate(true,'Id not provided',404,null);
        res.send(apiResponse);
}else{
            productModel.remove({'id':req.params.id})
            .exec((err,result)=>{
                if(err){
                    logger.error('error occured in deleting','ddeleteProduct',10);
                    apiResponse = response.generate(true,'error occured in deleting',404,err);
                    res.send(apiResponse);
                }else if(check.isEmpty(result)){
                    logger.info('product not found');
                    apiResponse = response.generate(false,'product not found',500,result);
                    res.send(apiResponse);
                }else{
                    logger.info('success');
                    apiResponse = response.generate(false,'success',200,result);
                    res.send(apiResponse);
                }
            })
}
}
module.exports = {
    create:create,
    viewProduct:viewProduct,
    viewCart:viewCart,
    update:update,
    viewByCategory:viewByCategory,
    viewBySubCategory:viewBySubCategory,
    deleteProduct:deleteProduct,
    addProductToCart:addProductToCart,
    viewAllProducts:viewAllProducts
}