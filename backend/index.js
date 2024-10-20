import express from 'express';
import dotenv from 'dotenv';

import { getCurrentAir } from './lib/airquality.js';
import { fetchTrafficDensity } from './lib/fetchTrafficData.js';
import { fetchAndJoin } from './lib/fetchAndJoin.js';
import { generateWarning } from './lib/generateWarning.js';
const latitude = 50.8503;
const longitude = 10.3517;

console.log(await generateWarning(latitude, longitude));