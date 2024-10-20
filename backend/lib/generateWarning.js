import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import { fetchAndJoin } from './fetchAndJoin.js';

export async function generateWarning(latitude, longitude){
    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
    });

    const joinData = await fetchAndJoin(latitude, longitude);

    const prompt = `
        You are an expert environmental scientist.
        Given the following Traffic and Air Quality Data: ${JSON.stringify(joinData)}

        In under 25 words, give the brief of the air quality in the area, and suggest any warnings or precautions.
    `;

    const chat = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.1-70b-versatile",
    
        temperature: 1,
    
        max_tokens: 8000,
    
        top_p: 1,
    
        stop: null,
    
        stream: false,
    });
    
    return chat.choices[0].message.content;
}