// Retrieve the high-level elements on the page:
// - The new task input field
// - The add new task button
// - The to-do list iteslf
const usernameInput = document.getElementById("username-input");
const editButton = document.getElementById("edit-username-button");
const messageInput = document.getElementById("new-message");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("messages");

// Add a click handlers to global buttons
sendButton.onclick = sendMessage;
editButton.onclick = editUsername;

/*******************************************
* Create a new message item:
*
* Generates a new message item using the data
* in the messageObj and appends it to the
* messages list.
*
* createNewMessage(messageObj);
********************************************/
function createNewMessage(messageObj) {
	let listItem = document.createElement("li"); // Create List Item
	let username = document.createElement("label"); // Label
	let message = document.createElement("p"); // Pragraph

	username.innerText = messageObj.username; // Change the label text to the username
	message.innerText = messageObj.message; // Change the paragraph text to the message

  // Append each element to the listItem
	listItem.appendChild(username);
	listItem.appendChild(username);

	messages.appendChild(listItem);
};


/*****************************************************
* Retrieve all messages from the server:
* - Use Axios to get all the messages currently
*		on the server at:
*			<ip_address>/messages
* - Then erase all the current messages
* - Then add each message from the response to the
*		messages area.
*****************************************************/
function getAllMessages() {
  // Complete me!
};


/*****************************************************
* Send a new message to the server:
* - Create a messageObj with the following properties:
*			* username
*			* message
* - Use Axios to post that message to the server at:
*			<ip_address>/messages/create
* - Then update the UI using createNewMessage()
*****************************************************/
function sendMessage() {
  // Complete me!
};


/*****************************************************************
* Edit Username:
*
* Edits the current username.
* The username should be sent with every post request.
*****************************************************************/
function editUsername() {
	let usernameSection = this.parentNode;
  let input = usernameSection.querySelector("input[type=text]");
  let label = usernameSection.querySelector("label");
  let button = this;

  if (usernameSection.classList.contains('editMode')) {
    label.innerText = input.value;
    button.innerText = 'Edit';
  } else {
    input.value = label.innerText;
    button.innerText = 'Save';
  }

  usernameSection.classList.toggle('editMode');
};

getAllMessages();
