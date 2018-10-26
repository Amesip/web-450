let config = {};

config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';

/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'admin';
config.database.password = 'admin123';
config.database.port = '37003';
config.database.url = 'ds137003.mlab.com/';
config.database.name = 'famous-composers';


module.exports = config;