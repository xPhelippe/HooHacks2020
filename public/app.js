document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app);

    firebase.initializeApp();

    

});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
                .then(result => {
                    const user = result.user;
                    console.log(user.displayName);
                    console.log(user.email);
                   $(".usersname").text(user.displayName);
                   $(".email").text(user.email);
                    console.log(user)})
}

function registerUser() {

    var Fname =  $("#Fname").val();
    var Lname = $("#Lname").val();
    var email = $("#email").val();

    console.log(Fname);
    console.log(Lname);
    console.log(email);

    var newUser = {
        FirstName: $("#Fname").val(),
        LastName: $("#Lname").val(),
        email: $("#email").val()
    };

    const db = firebase.firestore();

    db.collection("UserData").add(newUser)

    .then(function() {
        console.log("success");
    });


    window.location = "./profile.html"
}   