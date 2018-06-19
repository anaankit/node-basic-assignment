// importing express and other modules
const express = require('express');
const fs = require('fs');
const http =  require('http');
const appConfig = require('./config/appConfig')
const logger = require('./library/loggerLib')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const GlobalErrorMiddleware = require('./middlewares/appErrorHandler')
const routeLoggedMiddleware =  require('./middlewares/routeLogger');
var helmet = require('helmet');

//create an instance of our application
const app = express();


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(GlobalErrorMiddleware.gloalErrorHandler);
app.use(routeLoggedMiddleware.logIp);
app.use(helmet());

//importing mongoose
const mongoose = require('mongoose');
 
//bootstraping models
let modelsPath = "./models";
fs.readdirSync(modelsPath).forEach(function(file){
    if(-file.indexOf('.js')) require(modelsPath+'/'+file);
})

//bootstraping route
let routsPath = './routes';
fs.readdirSync(routsPath).forEach(function(file){
    
    if(-file.indexOf('.js')){
        let route = require(routsPath+'/'+file);
        route.setRouter(app);
    }

})

// http server related code


//creating http server
const server = http.createServer(app);

// start listening to the server
server.listen(appConfig.port);
server.on('error',onError);
server.on('listening',onListening);

// event listener for http error
function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

// event listener for http listen event
function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port)
    let db = mongoose.connect(appConfig.db.uri)
}
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})

// end of http server related code