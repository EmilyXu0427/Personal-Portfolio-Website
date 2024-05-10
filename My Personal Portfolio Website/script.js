function addMessage() {
    // Get the message of the new message
    let message = document.getElementById("new_message");
    // If the user has left a message, display a pop-up
    if (message.value != null && message.value.trim() != "") {
      console.log("New message added");
      //Call showPopup
      showPopup(true);
  
      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","messages");
      element.innerHTML = "\<span\>&#8220;\</span\>" + message.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of messages
      document.getElementById("all_messages").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
      showPopup(true);
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  