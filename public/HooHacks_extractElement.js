//Bob Acacio
//HooHacks Project
//This code can extract a single element from the firestore with a click of a button
//	This code works with retreiving "hopefully" the top element in the document"
 




// To retrieve one elment *cough* user_id

//This funtion is supposed to interact with loading an element from a document


loadButton.addEventListener("click", function(){
	firestore.collection(UserData.get().then(function(doc) {
		if (doc && doc.exists)
			var user_id = doc.data();	//retrieves document || not sure which document it'll grab
										// 						hopefully the top one
		}
	}).catch(function(error){
		console,log("Got error: ", error);
	});
});
			

//Function to display all unique IDs and fitness goal ####I have no confidence in this

 for (var i = 0; i < keys.length; i++) { //This will loop will iterate through all the keys and 
										  //display all the keys
    var k = keys[i];					  //k is our variable for our keys
    var goals = goalsName[k].names;		  	  //goals data is indexed with our keys
    var names = scores[k].score;
    //console.log(names, goals); \\ to check if it works
	
	
    var li = createElement('li', Name + ': ' + score);
    li.class('scorelisting');
    li.parent('scorelist');
