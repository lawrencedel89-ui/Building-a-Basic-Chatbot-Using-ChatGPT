// openai.js
class OpenAIAPI {
    static async generateResponse(userMessage) {
        return `You said: "${userMessage}"`; // Fake AI response
    }
}

module.exports = { OpenAIAPI };
