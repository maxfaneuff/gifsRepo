# gifsRepo
A Repo for the gifs AJAX homework

<h1>Hocky Gifs Galore</h1>
<h5>My submission for the AJAX/API homework</h5>

<h2>What This Page is About</h2>
<p>This page is meant to showcase my use of AJAX calls/API's.  The framework was a Bootstrap creation</p>

<h2>How This Page Works</h2>
<p>When the page loads, nearly twenty buttons generate at the top of the page, each with a value of what the label of the button says.  When clicked, that button's value is entered into an AJAX call, where gifs are retrieved from the JSON object info and appended to the HTML.  A new button can be added by typing a team into the text field.  The JS grabs the value of the entered text, adds it to topics array, and reprints the buttons w/ the same functionality</p>

<h2>Bugs and Issues/Things With Which I Struggled</h2>
<p>I was a bit nervous about putting a bunch of things inside my $(document).on("ready") function, but it was the only way to get the main functions to work.  I had an issue where my if statement that changed the src of my gifs would run over and over and over and over again, but Michael set me straight.  I don't think there are any obvious bugs in this</p>

<h2>Additional Notes</h2>
<p>Originally I wanted to do this project with music artists, but I learned that my music tastes aren't what you'd call "giphy compliant".  Most of the bands I like don't have enough gifs on giphy to serve the purposes I needed for this exercise.  I found the line "replace(new RegExp(" ", "g"), '+');" online to replace the spaces in my button values with "+" so they'd work with the giphy query link, and don't exactly know what it's saying.  I'm guessing that it looks for any of the first quoted character all the way through the global scope ("g"), and replaces it with the third quoted symbol.</p>



