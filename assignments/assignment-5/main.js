// This whole page works using just one function:
var madLibs = function() {
  // We will create a variable for each section of the page- the 5 inputs, and the empty <div> where the finished story will go. 
  var storyDiv = document.getElementById("story");
  var name = document.getElementById("name").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  var exclamation = document.getElementById("exclamation").value;
  var verb = document.getElementById("verb").value;
  // Once we create all of our variables, we change the HTML of our story <div> using innerHTML and adding a bunch of strings together, with punctuation and spaces. 
  storyDiv.innerHTML = name + " " + verb + " a " + adjective + " " + noun + ", " + exclamation + "!";
}

/*var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', madLibs);*/