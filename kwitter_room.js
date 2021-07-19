var firebaseConfig = {
    apiKey: "AIzaSyDF2tp4Sr69PGyQIWa1GxGuaePEWQCu0y4",
    authDomain: "twitter-ripofff.firebaseapp.com",
    databaseURL: "https://twitter-ripofff.firebaseio.com",
    projectId: "twitter-ripofff",
    storageBucket: "twitter-ripofff.appspot.com",
    messagingSenderId: "807445120707",
    appId: "1:807445120707:web:d0decb989f25c5b6538476"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
