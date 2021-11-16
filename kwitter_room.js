
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeMvQeFOAqSgDs1Ugf6cFtymATdcUeijk",
  authDomain: "kwitter-webapp-ac8e4.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-ac8e4-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-ac8e4",
  storageBucket: "kwitter-webapp-ac8e4.appspot.com",
  messagingSenderId: "838936298609",
  appId: "1:838936298609:web:64a509f659cc23582587d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room_Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
  });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}