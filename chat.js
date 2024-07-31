//------Change dark mode and light mode
function toggleMode(){
    var chatBox = document.querySelector('.chat')
      chatBox.classList.toggle('dark-mode')

      
}

//------cursor animation

// Create the custom cursor element
var cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Function to update the cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Function to expand the cursor on click
document.addEventListener('mousedown', () => {
    cursor.classList.add('expand');
});

// Function to shrink the cursor after click
document.addEventListener('mouseup', () => {
    cursor.classList.remove('expand');
});


// A simple chatbot that responds with some predefined answers
function chatbot(input) {
    var output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking. How can I help you today?";
    } else if (input.includes("javascript")) {
      output = "Javascript s a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. Do you want to ask any thing else ?";
    } else if (input.includes("react")) {
      output = " React is the most popular front-end JavaScript framework. This article will look at what that means, the fundamentals of React, and how it works. Do you want to ask any thing else ?.";
    } else if (input.includes("bye")) {
      output = "Bye! see you later.";
    } else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    var chat = document.getElementById("chat");
    var userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    var userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function playRingtone() {
    var ringtone = new Audio('whatsapp-rington.mp3'); 
    ringtone.play();
}

// Call the playRingtone function when the bot replies
function displayBotMessage(message) {
    var chat = document.getElementById("chat");
    var botMessage = document.createElement("div");
    botMessage.classList.add("bot");
    botMessage.classList.add("message");
    var botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    var botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar); 
    botMessage.appendChild(botText); 
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;

    playRingtone(); 
}


  // Send the user message and get the bot responses
  function sendMessage() {
    var input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      
      function showTypingAnimation() {
        document.getElementById("typing-indicator").style.visibility = "visible";
      }
      
      function hideTypingAnimation() {
        document.getElementById("typing-indicator").style.visibility = "hidden";
      }
      
      showTypingAnimation(); 
      
      var output = chatbot(input);
      
    
      setTimeout(function() {
        hideTypingAnimation(); 
        displayBotMessage(output);
      }, 3000);
      
      document.getElementById("input").value = "";
    }
}


  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });