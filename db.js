const Pool = require('pg').Pool;
  // declearing pool class object 
const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database:"students",
    password: "github@0",
    port: "5432"
});
module.exports = pool;

