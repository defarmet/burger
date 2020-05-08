// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

module.exports = {
	select_all: function(cb)
	{
		orm.select_all("burgers", function(result)
		{
			cb(result);
		});
	},

	insert_one: function(cols, vals, cb)
	{
		orm.insert_one("burgers", cols, vals, function(result)
		{
			cb(result);
		});
	},

	update_one: function(col_vals, condition, cb)
	{
		orm.update_one("burgers", col_vals, condition, function(result)
		{
			cb(result);
		});
	},
};
