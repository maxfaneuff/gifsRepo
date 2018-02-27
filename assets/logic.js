//JS for gifs page//

//Pseudocode//

//***On Load***//
	//1)  Buttons of all the bands are generated, using a for loop going through topics.length
	//2)  The area where the gifs populate are blank
	//3)  The input field appears next to it

//Functionality//
	// - When a button is clicked, 10 gifs append in the #gifs-div, with their rating on top of them
	// - When another button is clicked, the #gifs-div empties out, and new gifs & ratings append into it
	// - When a band is entered into the text field, that entry is captured a string, and added to the topics array.
	//   Another button is appended to the #buttons-div.  
	// - The AJAX runs on the .on("click").  When the buttons are generated, it sets the .attr("value", "team").  The value is 
	//   added into the queryURL by setting a varialbe to that value and putting it in the middle of the query


//      event.preventDefault(); - keeps the page from refreshing on every submit
//		$("document").on("click", ".buttons", function() {}) - makes sure that any time a button (.button) is added, it can run the function


var topics = ["new york rangers", "boston bruins", "montreal canadiens", "toronto maple leafs", "tampa bay lightning", "new jersey devils",
 				"carolina hurricanes", "vancouver canucks", "chicago blackhawks", "pittsburgh penguins",
 				"nashville predators", "florida panthers", "calgary flames", "dallas stars", "philadelphia flyers", "arizona coyotes",
 				"new york islanders", "washington capitals", "edmonton oilers"];

var queryBase = "https://api.giphy.com/v1/gifs/search?api_key=G5DXEBd2eTpUTuyA0LvDQJcDYjmtWZXl&q="

$("document").ready(function() {
	makeButtons();

	$("#submit").on("click", function() {
	newButton();
	$("#textField").val("");


	})

})

$(document).on("click", ".team", function() {
		$(".gifs-div").empty();

		var teamValue = $(this).attr("value");
		console.log(teamValue);

		// var teamString = JSON.stringify(teamValue);
		var team = teamValue.replace(new RegExp(" ", "g"), '+');
				//I have NO IDEA what new RegExp does, and I don't care//
		console.log(team);

		var queryURL = queryBase + team;

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {
			console.log(queryURL);
			var results = response.data;

			for (var i = 0; i < 11; i++) {

				var gifDiv = $("<div>");

				var rating = $("<p>").text("Rating: " + response.data[i].rating);

				var hockeyGif = $("<img>");

				hockeyGif.attr("src", response.data[i].images.original_still.url);
				hockeyGif.attr("gif-still", response.data[i].images.original_still.url);
				hockeyGif.attr("gif-anim", response.data[i].images.original.url);
				hockeyGif.attr("data-state", "still");
				hockeyGif.addClass("hockeyGif");

				gifDiv.append(rating);
				gifDiv.append(hockeyGif);
				console.log("-------");
				console.log(hockeyGif.attr("gif-anim"));

				$(".gifs-div").append(gifDiv);
			}

				$(".hockeyGif").on("click", function() {

					var state = $(this).attr("data-state");
					var gifAnim = $(this).attr("gif-anim");
					var gifStill = $(this).attr("gif-still");

					if (state === "still") {
						$(this).attr("src", gifAnim);
						$(this).attr("data-state", "anim");
						return;
					} else if (state === "anim") {
						$(this).attr("src", gifStill);
						$(this).attr("data-state", "still");
						return;
					}


				})



		});
})


	
	function newButton() {
		event.preventDefault();

		var newTeam = $("#textField").val().toLowerCase();
		console.log(newTeam);
		if((newTeam === "boston red sox") || (newTeam === "red sox")) {
			alert("Death to the Boston Red Sox");
		}

		if(topics.indexOf(newTeam) != -1) {
			alert("There's a button for that already!");
			return;
		}

		topics.push(newTeam);
		$(".buttons-div").empty();
		makeButtons();

	}

	function makeButtons() {

		for (var i = 0; i < topics.length; i++) {
			var button = $("<button type='button' class='btn btn-primary'></button>");
			button.attr("value", topics[i]);
			button.attr("id", "team-" + i);
			button.addClass("team");
			button.text(topics[i]);
			$(".buttons-div").append(button);
		}
	}
