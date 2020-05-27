var password = "pass";
var friends = ["Jacob", "Milly", "Etc"];

function view(){
    friends1 = String(friends);
    friends2 = friends1.replace(/,/g, "</br>");
    document.getElementById("friends-names").innerHTML = friends2;

    console.log("Process me!")

  //if(render == true){
    //menu();
  //}
}

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
  for(i = 0; i < friends.length; i++){
    if(friend_to_remove == friends[i]){
      friends.splice(i, 1);
    }
    view();
  }

  //Render friends here
document.getElementById("friends-names").innerHTML = friends;
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
