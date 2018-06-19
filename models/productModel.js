const mongoose = require('mongoose');
const schema = mongoose.Schema;


let product = new schema({

    id:{
        type:String,
        unique:true 
    },
    category:{
        type:String,
    },
    subCategory:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    detailsHtml:{
        type:String
    },
    specification:{

    },
    inStock:{
        type:Boolean,
        default:true
    },
    warranty:{
        type:String,
        default:'n/a'
    },
    addToCart:{
        type:Boolean,
        default:false
    }

})



mongoose.model('product',product);