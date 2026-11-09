const {StringDecoder} = require('string_decoder');
const url = require('url');
const routes = require('../routs.js');
const {notFoundHandler} = require('../Handlers/routsHandlers/notFoundHandler.js');
const { trim } = require('lodash');



const handler = {};

handler.handleReqRes = (req, res) => {
     // request
    
        const parseUrl = url.parse(req.url, true);
        const path = parseUrl.pathname;
        const trimmedPath = path.replace(/^\/+|\/+$/g, '');
        const method = req.method.toLowerCase();
        const queryStringObject = parseUrl.query;
        const headersObject = req.headers;

        const requestProperties = {
            parseUrl,
            path,
            trimmedPath,
            method,
            queryStringObject,
            headersObject
        };
    
        const decoder = new StringDecoder('utf-8');
        let realData = '';


        const chooseHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

        
        req.on('data', (buffer) => {
            realData += decoder.write(buffer);
        });
    
        req.on('end', ()=>{
            realData += decoder.end();
            chooseHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
            payload = typeof(payload) === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            res.writeHead(statusCode);
            res.end(payloadString);
        }) 
            // response
            res.end('Hello World');
        });
}

module.exports = handler;