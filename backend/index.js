import express from 'express';
import dotenv from 'dotenv';
import { fetchTrafficDensity } from './lib/fetchTrafficData.js';
import { initializeDatabase } from './lib/singlestoreClient.js';

await initializeDatabase();
console.log(await fetchTrafficDensity());