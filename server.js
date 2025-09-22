import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});



app.get("/hello", async (req, res) => {
    const response = await client.responses.create({
        model: "gpt-5",
        input: 'Write a one-sentence story about a skateboarding badger'
    });
    res.json({ messsage: response.output_text});
});

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));