//Inform user submit message successful or not by pop up window
function submitMessage() {
    // Get the message
    var messageArea = document.getElementById("message");
    var message = messageArea.value.trim(); //remove leading and tailing whitespace
    // If the user has left a message, display a pop-up
    if(message === ""){
      alert("Message area is empty. Please submit another request");
    }
}
  