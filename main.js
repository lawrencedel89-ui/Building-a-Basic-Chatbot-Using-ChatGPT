const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (!message) return;
    displayMessage('user', message);
    getChatbotResponse(message);
    userInput.value = '';
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    const messageParagraph = document.createElement('p');
    messageParagraph.innerText = message;
    messageElement.appendChild(messageParagraph);
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getChatbotResponse(userMessage) {
    fetch('/getChatbotResponse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage })
    })
    .then(res => res.json())
    .then(data => displayMessage('chatbot', data.chatbotResponse))
    .catch(err => console.error('Error:', err));
}
