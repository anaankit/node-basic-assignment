const response = require('../library/responseLib')

let errorHandler = (err,req,res,next)=>{
    console.log(' application  error handler called');
    console.log(err);
    res.send('some error occured at global level');
}

let notFoundHandler = (req,res,next) =>{
    console.log('Global not found error handler called');
    let apiResponse = response.generate(true,"route not found",404,null);
    res.status(404).send(apiResponse);
}

module.exports = {
    gloalErrorHandler : errorHandler,
    globalNotFounHandler : notFoundHandler
}