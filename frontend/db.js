// db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "imp2083",
  database: "resumeAnalyzer",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
