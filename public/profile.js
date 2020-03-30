window.addEventListener('DOMContentLoaded', (event) => {
    var name = sessionStorage.getItem("FirstName");
    $("#namefield").text(name);

    var db = firebase.firestore();

    var email = db.collection("UserData").where("FirstName","==", name)
    .get()
    .then();
});