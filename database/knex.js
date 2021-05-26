var mysql_config = require("./knexfile");
var knex =require('knex')(mysql_config);
module.exports = knex;
