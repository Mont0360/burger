let mysql = require("mysql");

//let connection = mysql.createConnection({
  //port: 3306,
  //host: "localhost",
  //user: "root",
  //password: "Van1gogh!",
  //database: "burgers_db"
  let connection = mysql.createConnection({
    port: "3306",
    host: "q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xftubxsuj5rls9t5",
    password: "nf8oa7k0k527y4ts",
    database: "jgowbo73nzhnpvf9"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;