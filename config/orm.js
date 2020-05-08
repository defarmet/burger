var connection = require("../config/connection.js");

module.exports = {
	select_all: function(table, cb)
	{
		var query = "select * from " + table;
		connection.query(query, function(err, result)
		{
			if (err)
				throw err;

			cb(result);
		});
	},

	insert_one: function(table, cols, vals, cb)
	{
		var query = "insert into " + table;

		query += " (" + cols.toString() + ") values";
		var arr = [];
		for (var i = 0; i < vals.length; i++) {
			arr.push("?");
		}
		query += " (" + arr.toString() + ')';
		console.log(query);

		connection.query(query, vals, function(err, result)
		{
			if (err)
				throw err;

			cb(result);
		});
	},

	update_one: function(table, col_vals, condition, cb)
	{
		var query = "update " + table;

		var arr = [];
		for (key in col_vals) {
			if (Object.hasOwnProperty.call(col_vals, key)) {
				var val = col_vals[key];
				if (typeof val === "string") {
					val = '"' + val + '"';
				}
				arr.push(key + '=' + val);
			}
		}
		query += " set " + arr.toString() + " where " + condition;
		console.log(query);

		connection.query(query, function(err, result)
		{
			if (err)
				throw err;

			cb(result);
		});
	}
};
