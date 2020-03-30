window.addEventListener('DOMContentLoaded', (event) => {
    var name = sessionStorage.getItem("FirstName");
    $("#namefield").text(name);

    var db = firebase.firestore();

    //grab email and change email field in profile page
    var email = db.collection("UserData").where("FirstName","==", name)
    .get()
    .then();
});