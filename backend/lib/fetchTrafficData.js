import axios from 'axios';
import dotenv from 'dotenv';
import { initializeDatabase } from './singlestoreClient.js';


export async function fetchTrafficDensity() {
    const url = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${process.env.TRAFFIC_API_KEY}&point=52.41072,4.84239`;
    const db = await initializeDatabase(); // Connect to the DB

    let traffic_table;

    try {
        traffic_table = db.table.use('traffic_table');
    }
    catch (error) {
        console.error('Table error:', error);
    }

    try {
        const response = await axios.get(url);
        
        if (response.status === 200) {
            //console.log(response.data)
            try {
                await traffic_table.insert({
                    frc: response.data.flowSegmentData.frc,
                    currentSpeed: response.data.flowSegmentData.currentSpeed,
                    freeFlowSpeed: response.data.flowSegmentData.freeFlowSpeed,
                    currentTravelTime: response.data.flowSegmentData.currentTravelTime,
                    freeFlowTravelTime: response.data.flowSegmentData.freeFlowTravelTime,
                    confidence: response.data.flowSegmentData.confidence,
                    roadClosure:  response.data.flowSegmentData.roadClosure,
                });
                console.log("Data inserted successfully!");
            } catch (error) {
                console.error(`Error inserting data into database: ${error.message}`);
            }
        } else {
            console.error(`Error: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching traffic data: ${error.message}`);
        return null;
    }
};
