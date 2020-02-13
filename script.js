// Add to list by clicking Add button

function addToList() {
  var element = document.createElement("li");
  var inputValue = document.getElementById("listInput").value;
  var text = document.createTextNode(inputValue);
  element.appendChild(text);

  if (inputValue === '') {
    alert("You have to write what you want to add!");
  } else {
    document.getElementById("shoppingList").appendChild(element);
  }
  document.getElementById("listInput").value = ""; //clear input

  var button = document.createElement("button");
  var buttonText = document.createTextNode("X");
  button.className = "remove";
  button.appendChild(buttonText);
  element.appendChild(button);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//Add "remove button" to list elements

var myList =document.getElementsByTagName("li");
var i;

for(i=0; i<myList.length; i++){
    var button = document.createElement("button");
    var buttonText= document.createTextNode("X");
    button.className = "remove";
    button.appendChild(buttonText);
    myList[i].appendChild(button);
}

//Remove from list by click on button

var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var li = this.parentElement;
    li.style.display = "none";
  }
}

//Item designation as purchased

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('bought');
  }
}, false);