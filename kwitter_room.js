var firebaseConfig = {
      apiKey: "AIzaSyA-tKCBAG4pElDQWNOUqdZXZwS5fuGMP94",
      authDomain: "kwitter-bb6aa.firebaseapp.com",
      databaseURL: "https://kwitter-bb6aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-bb6aa",
      storageBucket: "kwitter-bb6aa.appspot.com",
      messagingSenderId: "389402982559",
      appId: "1:389402982559:web:271bff156e8c738b144aaa",
    };
    // Initialize Firebases
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
 user_name =localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
 function addRoom()
 {
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"addingRoom_name"
       });
       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; } function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "kwitter.html"; }