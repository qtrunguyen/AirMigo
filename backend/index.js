import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { getCurrentAir } from './lib/airquality.js';
import { fetchTrafficDensity } from './lib/fetchTrafficData.js';
import { fetchAndJoin } from './lib/fetchAndJoin.js';
import { generateWarning } from './lib/generateWarning.js';

const app = express()
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())

app.post('/groq', async (req, res) => {
    let {latitude, longitude, conditions} = req.body
    await getCurrentAir(latitude, longitude);
    await fetchTrafficDensity(latitude, longitude);
    res.send(await generateWarning(latitude, longitude, conditions))
})

const port = 4000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
})
