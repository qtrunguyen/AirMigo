import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import { fetchAndJoin } from './fetchAndJoin.js';

export async function generateWarning(latitude, longitude, conditions){
    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
    });

    const joinData = await fetchAndJoin(latitude, longitude);

    const prompt = `
        You are an expert environmental scientist.
        Given the following Traffic and Air Quality Data: ${JSON.stringify(joinData)}
        In under 40 words output a message.
        The message give the brief of the air quality in the area, and base on user health condition: ${conditions}, suggest any actions, warnings or precautions users should take.
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