const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(userText) {
  let reply = "Sorry, I didn't understand that 🤔";

  userText = userText.toLowerCase();

  if (userText.includes("hello") || userText.includes("hi")) {
    reply = "Hello! How can I help you? 😊";
  }
  else if (userText.includes("how are you")) {
    reply = "I'm doing great! Thanks for asking 😄";
  }
  else if (userText.includes("your name")) {
    reply = "I'm a Chat Bot created for a mini project 🤖";
  }
  else if (userText.includes("who created you")) {
    reply = "I was created by a 3rd-year student using JavaScript 💻";
  }
  else if (userText.includes("time")) {
    reply = "Current time is: " + new Date().toLocaleTimeString();
  }
  else if (userText.includes("date")) {
    reply = "Today's date is: " + new Date().toLocaleDateString();
  }
  else if (userText.includes("help")) {
    reply = "You can ask me about time, date, greetings, or say bye 🙂";
  }
  else if (userText.includes("thank")) {
    reply = "You're welcome! 😊";
  }
  else if (userText.includes("bye")) {
    reply = "Goodbye! Have a great day 👋";
  }

  setTimeout(() => addMessage(reply, "bot"), 600);
}

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  messageInput.value = "";
  botReply(text);
}

messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
