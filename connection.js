const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Babayaga@813",
  database: "New_DB_Learning",
});

module.exports = pool;