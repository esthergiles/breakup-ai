const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const axios = require("axios");

require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    // temperature: 0,
    prompt: `Write a cheeky and playful breakup letter for ${prompt}`,
});
  res.send(completion.data.choices[0].text);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//run node server.js
