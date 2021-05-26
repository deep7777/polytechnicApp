"use strict";
let host = process.env.DB_ENDPOINT || "localhost";
let user = process.env.DB_USER || "root";
let password = process.env.DB_PASSWORD || "root";
let database = process.env.DB_NAME || "polytechnic";
let port =  process.env.DB_PORT || "3306";

let db_params = {
  client: 'mysql',
  connection: {
    host: host,
    user: user,
    password:password,
    database: database,
    port : port,
    charset:'utf8mb4'
  }
};



module.exports = db_params;
