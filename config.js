/*global process*/
module.exports = {
  debug: process.env.DEBUG || false,
  connection_string: process.env.MONGOLAB_URI || process.env.CONNECTION_STRING
};