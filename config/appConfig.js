// creating an object of App config
let appConfig = {}

appConfig.port = 3000;
appConfig.allowedCorsOrigin = '*';
appConfig.evn='dev';
appConfig.db={
    uri:'mongodb://localhost/ecommerce6'
}
appConfig.apiVersion = '/api/v1';

module.exports = {

    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.evn,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
}


