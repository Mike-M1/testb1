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
        input: 'You are an assistant that is going to be helping John Doe get to the bottom of his customers needs. He does remodeling and building. He will give you a series of questions to ask the customers you may or may not ask some based on what the answer. Let him know what you are going to do and assure him you are capable of helping the customers'
    });
    res.json({ messsage: response.output_text});
});

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));