let config = {};

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
config.database.port = '37003';
config.database.url = 'mongodb://Amesip:SopLib5395@ds137003.mlab.com:37003/famous-composers';
config.database.name = 'famous-composers';


module.exports = config;