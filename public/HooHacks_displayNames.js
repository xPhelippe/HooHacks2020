/*Using Sketch.JS

#Bob Acacio
#HooHacks Project
#This will display All Full Names and Points
	*/


var list_div = document.querySelector("slist_div");  //class = list-item

db.collection("UserData").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

		list_div.innerHTML += "<div class='list-item'><h3>" doc.data().FirstName + "<h3>" + doc.data().LastName + 
			"<h3><p>Points : "+ doc.collection.data().Points"</p></div>" 

    });
});



//TRY THIS ONE FOR TESTING, this will display ALL first name and last name

var list_div = document.querySelector("slist_div");  //class = list-item

db.collection("UserData").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

		list_div.innerHTML += "<div class='list-item'><h3>" doc.data().FirstName + "<h3>" + doc.data().LastName </div>" 

    });
});




