const express = require('express');
const path = require('path');
const { OpenAIAPI } = require('./openai'); // uses mock

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getChatbotResponse', async (req, res) => {
    const userMessage = req.body.userMessage;
    const chatbotResponse = await OpenAIAPI.generateResponse(userMessage);
    res.json({ chatbotResponse });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
