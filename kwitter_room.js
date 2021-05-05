
//ADD YOUR FIREBASE LINKS HERE
//I DID
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA3K8vzfD19m0EIut20EnAS33bayvG5W0c",
      authDomain: "bamboo-66604.firebaseapp.com",
      databaseURL: "https://bamboo-66604-default-rtdb.firebaseio.com",
      projectId: "bamboo-66604",
      storageBucket: "bamboo-66604.appspot.com",
      messagingSenderId: "318074168390",
      appId: "1:318074168390:web:81fbfd811b0bb2dc4c5647"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
     function addRoom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose:"adding room name"
           });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.localStorage="kwitter_page.html";
}