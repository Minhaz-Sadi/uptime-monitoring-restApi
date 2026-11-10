const { sampleHandler } = require('./Handlers/routsHandlers/sampleHandlers.js');
const { userHandler } = require('./Handlers/routsHandlers/userHandler.js');
const { tokenHandler } = require('./Handlers/routsHandlers/tokenHandler.js');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler
};

module.exports = routes;