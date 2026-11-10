const { sampleHandler } = require('./Handlers/routsHandlers/sampleHandlers.js');
const { userHandler } = require('./Handlers/routsHandlers/userHandler.js');

const routes = {
    sample: sampleHandler,
    user: userHandler
};

module.exports = routes;