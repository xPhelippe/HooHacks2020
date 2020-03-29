

//Bob Acacio
//HooHacks Project
//This code can receive data (user's name and score) and store it in Firebase. The code is also able to 
//display all the keys (the relevant UserData) to be accessed from the webpage


var database; //Our firebase database
var submitButton;
var nameInput;
var scoreInput;
var score;

/*
CODE to set up page with buttons and boxes
*/


function setup() {

  createP('Fill in all fields');	//text header
  nameInput = createInput('User');	//field for user's name
  scoreInput = createInput('Score');//field for input user's score, this is here because I'm not sure how 
									//hard adding the goal points will be. This gives us the option of the
									//user self-tabulating
  submitButton = createButton('submit'); //makes a button to push
  submitButton.mousePressed(submitScore);//Makes the submit button do something

  var config = {
    /*THIS IS WHERE
	OUR API & DATABSE
	KEY GOES */
  };
  firebase.initializeApp(config); //initalizes firebase
  database = firebase.database(); //sets database to be firebase
}

var ref = database.ref('UserData'); //Saves to this node or framework guy wasn't clear
ref.on('value', gotData, errData);	//Creates functions to manage data


//Submit info to database

function submitScore() {		// This funtion sends data to the database. We still have to create fields and functions.
  var data = {
    User: nameInput.value(),	// User inputs name
    Score: score				// User input score, for now
  };
  console.log(data);
  var ref = database.ref('UserData');
  ref.push(data);
} 


//Display Names and scores


function gotData(data) {
  var scorelistings = selectAll('.scorelisting'); //initialize list for scores
  for (var i = 0; i < scorelistings.length; i++) { //this iterates through all scores to display
    scorelistings[i].remove();
  }
  var scores = data.val(); // initalizes list
  var keys = Object.keys(scores); //gives us an array of all the keys
								  //keys are (example /UserData/gK6UW8AVt6bxaxyM4lRF) essentially they are
								  // unique for each users profile (score, name, location, etc.)
  //console.log(keys); \\ to check if it works
  
  
  for (var i = 0; i < keys.length; i++) { //This will loop will iterate through all the keys and 
										  //display all the keys
    var k = keys[i];					  //k is our variable for our keys
    var names = scores[k].names;		  //scores data is indexed with our keys
    var score = scores[k].score;
    //console.log(names, score); \\ to check if it works
	
	
    var li = createElement('li', initials + ': ' + score);
    li.class('scorelisting');
    li.parent('scorelist');
  }
}









