var password = "pass";
var friends = ["Jacob", "Milly", "Etc"];

function render(){
  document.getElementById("friends-names").innerHTML = "";

  document.getElementById("friends-names").innerHTML += "<ol>";
  for (i = 0; i < friends.length; i++){
    document.getElementById("friends-names").innerHTML += "<li>" + String(friends[i]) + " - " + "<button onclick='remove_by_index("+i+", friends)'>x</button>" + " </li>";
  }
  document.getElementById("friends-names").innerHTML += "</ol>";
}

//View is the


function view(){
    friends1 = String(friends);
    console.log(friends1)
    friends2 = friends1.replace(/,/g, "</br>");
    //document.getElementById("friends-names").innerHTML = friends2;

    console.log("Process me!");

    render();
  //if(render == true){
    //menu();
  //}
}

//Homework due on 5/29/2020!
//Write a function which takes in 1 int, 1 array
//Splice that remove_by_index in the array_to_spice
//Return the array that has been spliced

//Example call:
//var myA = ["A", "B", "C"];
//console.log(myA); // ["A", "B", "C"]
//var myRemoved = remove_by_index(1, myA);
//console.log(myRemoved); // ["A", "C"];

function remove_by_index(index_to_remove, array_to_splice){
  //Use the args in the splice method
  //var result_array = splice
  for(i = 0; i < array_to_splice.length; i++){
    if(String(i) == String(index_to_remove)){
      console.log("Number Found");
      array_to_splice.splice(i, 1);
      view();
    }
  }

  view();
  return array_to_splice;
  //RETURN
  //THE ARRAY WITHOUT THE INDEX SPECIFIED
  console.log(index_to_remove);
}

var array1 = ["A", 1, "B", 2];


window.addEventListener('load', function() {
    view();
});

function add(){
  var new_friend_name = prompt("Enter your friend's name: ");
  friends.push(String(new_friend_name));
  console.log("200");
  //Render friends here
  view();
  //menu();
}

function remove(){
  var friend_to_remove = prompt("Current Friends: " + friends + " \n Enter the name of a friend you want to remove: ");
  temp_list = friends;
  String(friend_to_remove);
  for(i = 0; i < friends.length; i++){
    if(friend_to_remove == friends[i]){
      //friends now equal to all friends NOT EQUAL to the friends we want to remove!
      //var friends = friends.filter( function(value, index, arr){ return value != friend_to_remove;});
      friends = remove_by_index(i, 1);
      console.log(String(friends));
    }
  }

  view();

  //Render friends here
//document.getElementById("friends-names").innerHTML = friends;
  console.log(friends);
  //menu();
}

function menu(){
  var option = prompt("Enter an option: (1-3)\n1.) View all friends \n2.) Add a new Friend \n3.) Remove a Friend");
  //Logic operators
  // && means and WILL GIVE LESS SCENARIOS (both conditions have to be true)
  // || means or will GIVE MORE SCENARIOS (*either* condition could be true)
  if(option == "1" || option == "1.)"){
    view();
  }
  if(option == "2" || option == "2.)"){
    add();
  }
  if(option == "3" || option == "3.)"){
    remove();
  }
}
//CRUD

//Create
//Read
//Update
//Delete

//var prompt1 = prompt("Enter your password");

//console.log(prompt1);

//menu();
