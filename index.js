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
const data = require('./lib/data.js');

// app object - module scaffroding
const app  = {};

// data.create('test', 'newFile', {'name': 'Bangladesh', 'language':'bangla'}, (err) => {
//     console.log(`error was`, err);
    
// })
// data.read('test', 'newFile', (err, data) => {
    //     console.log(err, data);
    
    // })
    
// data.update('test', 'newFile', {'name': 'England', 'language':'English'}, (err) => {
//     console.log(`error was`, err);
    
// })
data.delete('test', 'newFile', (err) => {
    console.log(`error was`, err);
    
})
    
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);

    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
        
    })
}

// response handle
app.handleReqRes = handleReqRes;

    


app.createServer();