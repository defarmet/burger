var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: process.env.SQL_PASS,
		database: "burgers_db"
	});
}

connection.connect(function(err) {
	if (err) {
		console.error("ERROR CONNECTING: " + err.stack);
		return;
	}

	console.log("CONNECTED AS ID " + connection.threadId);
});

module.exports = connection;
