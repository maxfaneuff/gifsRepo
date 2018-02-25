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
	// - The AJAX runs on the .on("click").  When the buttons are generated, it sets the .attr("value", "band").  The value is 
	//   added into the queryURL by setting a varialbe to that value and putting it in the middle of the query


//      event.preventDefault(); - keeps the page from refreshing on every submit
//		$("document").on("click", ".buttons", function() {}) - makes sure that any time a button (.button) is added, it can run the function


var topics = ["odesza", "bassnectar", "above and beyond", "porter robinson", "tchami", "galantis", "dillon francis", "armin van buuren",
				"claude vonstroke", "kaskade", "duke dumont", "illenium", "rezz", "cosmic gate", "alesso", "dada life", "zomboy", 
				"zeds dead", "what so not", "nghtmre"];

var queryBase = "https://api.giphy.com/v1/gifs/random?api_key=G5DXEBd2eTpUTuyA0LvDQJcDYjmtWZXl&q="

$("document").ready(function() {
	alert("ready");
	makeButtons();
})

$(document).on("click", "#band", function() {

		var band = $(this).attr("value");
		alert(band);

		
})
	
	$("#submit").on("click", function() {
		console.log("working");
		event.preventDefault();

		$(".gifs-div").empty();

		var newBand = $("#email").val().trim();
		topics.append(newBand);
		makeButtons();
		console.log(newBand);
	})

	function makeButtons() {

		for (var i = 0; i < topics.length; i++) {
			var button = $("<button type='button' class='btn btn-primary'></button>");
			button.attr("value", topics[i]);
			button.attr("id", "band");
			button.text(topics[i]);
			$(".gifs-div").append(button);
		}
	}
