// importing required fields
const express = require('express');
const appConfig = require('../config/appConfig');
const appController =  require('../controller/mainController')
const adder = require('../library/adder')
const auth =  require('../middlewares/auth')

//setting base url
const baseUrl = appConfig.apiVersion;


//creaing set router function
let setRouter = (app) =>{
    
    
    //view
    app.get(baseUrl+'/view/all/products',auth.isAuthenticated,appController.viewAllProducts)
    
	/**
	 * @api {get} /api/v1/view/all/products Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "err": false,
    "message": "success",
    "status": 200,
    "data": [
        {
            "inStock": true,
            "warrenty": "1 year warrenty from seller",
            "addToCart": true,
            "id": "Hkw7zOrbQ",
            "name": "one plus 6T",
            "category": "Electronics",
            "subCategory": "mobiles",
            "price": 30000,
            "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
            "specification": "20mp primary camera, the best at half the price",
            "warranty": "n/a"
    				}
	    		]
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/view/:id',auth.isAuthenticated,appController.viewProduct);
    
    
	/**
	 * @api {get} /api/v1/view/:id Get a single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} id The id should be passed as the URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "err": false,
    "message": "success",
    "status": 200,
    "data": [
        {
            "inStock": true,
            "warrenty": "1 year warrenty from seller",
            "addToCart": true,
            "id": "Hkw7zOrbQ",
            "name": "one plus 6T",
            "category": "Electronics",
            "subCategory": "mobiles",
            "price": 30000,
            "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
            "specification": "20mp primary camera, the best at half the price",
            "warranty": "n/a"
    				}
	    		]
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */



    app.get(baseUrl+'/view/category/:category',auth.isAuthenticated,appController.viewByCategory);
    	/**
	 * @api {get} /api/v1/view/category/:category Get all products in a category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category The category should be passed as the URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "err": false,
    "message": "success",
    "status": 200,
    "data": [
        {
            "inStock": true,
            "warrenty": "1 year warrenty from seller",
            "addToCart": true,
            "id": "Hkw7zOrbQ",
            "name": "one plus 6T",
            "category": "Electronics",
            "subCategory": "mobiles",
            "price": 30000,
            "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
            "specification": "20mp primary camera, the best at half the price",
            "warranty": "n/a"
    				}
	    		]
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */
    app.get(baseUrl+'/view/subCategory/:subCategory',auth.isAuthenticated,appController.viewBySubCategory)
/**
	 * @api {get} /api/v1/view/subCategory/:subCategory Get all products in a sub category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} subCategory The subCategory should be passed as the URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "err": false,
    "message": "success",
    "status": 200,
    "data": [
        {
            "inStock": true,
            "warrenty": "1 year warrenty from seller",
            "addToCart": true,
            "id": "Hkw7zOrbQ",
            "name": "one plus 6T",
            "category": "Electronics",
            "subCategory": "mobiles",
            "price": 30000,
            "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
            "specification": "20mp primary camera, the best at half the price",
            "warranty": "n/a"
    				}
	    		]
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */

    //cart

    app.put(baseUrl+'/addToCart/:id',auth.isAuthenticated,appController.addProductToCart);

    /**
	 * @api {put} /api/v1/addToCart/:id  Add the product to cart
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} id The id of the product should be passed as the URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	"err": false,
    "message": "Successfully added product to cart",
    "status": 200,
    "data": {
        "inStock": true,
        "warranty": "n/a",
        "addToCart": true,
        "_id": "5b27f21e6786a5273c58fe3e",
        "warrenty": "1 year warrenty from seller",
        "id": "Hkw7zOrbQ",
        "name": "one plus 6T",
        "category": "Electronics",
        "subCategory": "mobiles",
        "price": 30000,
        "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
        "specification": "20mp primary camera, the best at half the price",
        "__v": 0
        		}
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */
    //cart

    

    app.post(baseUrl+'/view/cart/',auth.isAuthenticated,adder.adder,appController.viewCart);
   
    /**
	 * @api {post} /api/v1/view/cart/  View contents of the cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	"err": false,
    "message": "success",
    "status": 200,
    "data": {
        "inStock": true,
        "warranty": "n/a",
        "addToCart": true,
        "_id": "5b27f21e6786a5273c58fe3e",
        "warrenty": "1 year warrenty from seller",
        "id": "Hkw7zOrbQ",
        "name": "one plus 6T",
        "category": "Electronics",
        "subCategory": "mobiles",
        "price": 30000,
        "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
        "specification": "20mp primary camera, the best at half the price",
        "__v": 0
        		}
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */

    //update
    app.put(baseUrl+'/:id/update',auth.isAuthenticated,appController.update);
    
    /**
	 * @api {put} /api/v1/:id/update  modify a product
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} id  id of the product passed as the URL parameter
     * @apiParam {String} field to be modified passed as body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	"err": false,
    "message": "success",
    "status": 200,
    "data": {
        "ok": 1,
        "nModified": 1,
        "n": 1
    		}
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */
    


    //create and delete

    app.post(baseUrl+'/create',auth.isAuthenticated,appController.create)   

    /**
	 * @api {post} /api/v1/create Create a product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} name  name of the product passed as body parameter
     * @apiParam {String} category  category of the product passed as body parameter
     * @apiParam {String} subCategory  subCategory of the product passed as body parameter
     * @apiParam {String} price  price of the product passed as body parameter
     * @apiParam {String} detailsHtml  detailsHtml of the product passed as body parameter
     * @apiParam {String} specification  specification of the product passed as body parameter
     * @apiParam {Boolean} inStock  inStock true or false for product passed as body parameter
     * @apiParam {String} warranty  warranty of the product passed as body parameter
     * @apiParam {Boolean} addToCart  addToCart true or false for product passed as body parameter by default it will be set to false
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	"err": false,
    "message": "success",
    "status": 200,
    "data": {
        "inStock": true,
        "warranty": "n/a",
        "addToCart": true,
        "_id": "5b27f21e6786a5273c58fe3e",
        "warrenty": "1 year warrenty from seller",
        "id": "Hkw7zOrbQ",
        "name": "one plus 6T",
        "category": "Electronics",
        "subCategory": "mobiles",
        "price": 30000,
        "detailsHtml": "Avaliable only on amazon, best camera phone money can buy",
        "specification": "20mp primary camera, the best at half the price",
        "__v": 0
        		}
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */
    



    app.post(baseUrl+'/:id/delete',auth.isAuthenticated,appController.deleteProduct)
    
    /**
	 * @api {post} /api/v1/:id/delete delete a product
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} id  id of the product passed as url parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {"err": false,
    "message": "success",
    "status": 200,
    "data": {
        "ok": 1,
        "n": 1

        		}
	    	}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error while searching",
	    "status": 404,
	    "data": null
	   }
	 */
    


}


module.exports = {
    setRouter:setRouter
}       