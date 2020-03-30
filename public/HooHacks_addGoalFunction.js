
//Bob Acacio
//HooHacks Project
//This code can receive data (goalName,amount, points) and store it in Firebase. 
	
	
function addGoal()	{

var goalName = $("#goalName").val();	//Creates variable labels 
var amount = $("#amount").val();
var points = $("#points").val();
var user_id = $("#user_id").val();		//This is where i need you to find out how to get unique account
										//number from registration hopefully its in the console?

console.log(goalName);
console.log(amount);
console.log(points);


var newGoal = {								//Creates new goal with all parameter 
        goalName = $("#goalName").val();
		amount = $("#amount").val();
		points = $("#points").val();		//this may have to be changed to data type "number, float, idk"
    };

firebase.firestore().collection("UserData").document(user_id) //USER ID HAS TO UPDATE FOR LOG-IN
                  .collection("Goal").document(goalName).set({
					//may have to add goalName again here again when listing document on website
					Amount : "amount",
					Points : "points"
					
					
				//If this does not work replace set with this	
				// set(newGoal)

				  
		})
	.then(function() {
		console.log("Goal successfully written!");
	})
	.catch(function(error) {
		console.error("Error writing goal: ", error);
	});

}






































