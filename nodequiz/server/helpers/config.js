let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {mongodb};
config.database.username = 'Amesip';
config.database.password = 'SopLib5395';
config.database.port = '61342';
config.database.url = 'mongodb://Amesip:SopLib5395@ds261342.mlab.com:61342/barrett-web450-nodequiz';
config.database.name = 'barrett-web450-nodequiz';


module.exports = config;