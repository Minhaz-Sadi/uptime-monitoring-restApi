const { sampleHandler } = require('./Handlers/routsHandlers/sampleHandlers.js');
const { userHandler } = require('./Handlers/routsHandlers/userHandler.js');
const { tokenHandler } = require('./Handlers/routsHandlers/tokenHandler.js');
const { checkHandler } = require('./Handlers/routsHandlers/checkHandler.js');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler
};

module.exports = routes;