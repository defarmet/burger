$(function()
{
	$(".devour").on("click", function()
	{
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(function()
		{
			console.log("Burger has been devoured");
			location.reload();
		});
	});

	$("#create").on("submit", function(e)
	{
		e.preventDefault();

		$.ajax("/api/burgers", {
			type: "POST",
			data: {name: $("#burger").val().trim()}
		}).then(function()
		{
			console.log("Added new burger");
			$("#burger").val("");
			location.reload();
		});
	});
});
