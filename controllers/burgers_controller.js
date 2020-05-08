var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res)
{
	burger.select_all(function(data)
	{
		res.render("index", {burgers: data});
	});
});

router.post("/api/burgers", function(req, res)
{
	burger.insert_one(["burger_name"], [req.body.name], function(result)
	{
		res.json({id: result.insertId});
	});
});

router.put("/api/burgers/:id", function(req, res)
{
	var condition = "id = " + req.params.id;
	console.log("CONDITION:", condition);

	burger.update_one({devoured: true}, condition, function(result)
	{
		if (result.changedRows == 0)
			return res.status(404).end();

		res.status(200).end();
	});
});

module.exports = router;
