let adder = (req,res,next)=>{
    req.addToCart = true;
    next();
    
}


module.exports ={
    adder:adder
}