// user types username in input 1

// user types a comment in input 2

// user clicks button function runs
function post(){

// store user's username and comment
var username = document.getElementById("username").value;
console.log(username);
var comment = document.getElementById("comment").value;
console.log(comment);
var d = new Date()


// user's user name and comment are printed to document
	var bigDiv = document.createElement("div");
	bigDiv.className = "newdivstyle";
	bigDiv.id = "bigdiv";
	document.body.appendChild(bigDiv);

	var nameDiv = document.createElement("div");
	nameDiv.className = "newusername"
	nameDiv.id = "namediv";
	nameDiv.innerText = username;
	document.getElementById("bigdiv").appendChild(nameDiv);

	var commentDiv = document.createElement("div");
	commentDiv.className = "newcomment"
	commentDiv.id = "commentDiv";
	commentDiv.innerText = comment;
	document.getElementById("bigdiv").appendChild(commentDiv);

	var p = document.createElement("p");
	p.className = "timestamp"
	p.innerHTML = d.toString();
	document.getElementById("bigdiv").appendChild(p);
}