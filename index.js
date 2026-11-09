/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Md. Minhaz Uddin Sadi ( Sadi Explains )
 * Date: 8/11/2026
 *
 */

// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes.js')
const environment = require('./helpers/environments.js');

// app object - module scaffroding
const app  = {};



app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);

    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
        
    })
}

// response handle
app.handleReqRes = handleReqRes;

    


app.createServer();