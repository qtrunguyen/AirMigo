import axios from 'axios'
import dotenv from 'dotenv'
import { initializeDatabase } from './singlestoreClient.js'

export async function getCurrentAir(latitude, longitude) {
    const requestBody = {
        "location": {
            "latitude": latitude,
            "longitude": longitude
        }
    }
    const db = await initializeDatabase(); // Connect to the DB

    let airquality_table;

    try {
        airquality_table = db.table.use('airquality_table');
    }
    catch (error) {
        console.error('Table error:', error);
    }

    axios
        .post(`https://airquality.googleapis.com/v1/currentConditions:lookup?key=${process.env.GOOGLE_AIR_QUALITY_KEY}`, requestBody)
        .then(response => {
            try {
                airquality_table.insert({
                    latitude: String(latitude),
                    longitude: String(longitude),
                    aqi: response.data.indexes[0].aqi,
                    red: response.data.indexes[0].color.red,
                    green: response.data.indexes[0].color.green,
                    blue: response.data.indexes[0].color.blue,
                    category: response.data.indexes[0].category,
                    dominant_pollutant: response.data.indexes[0].dominantPollutant
                });
            } catch (error) {
                console.error(`Error inserting data into database: ${error.message}`);
            }
        })
        .catch(err => {
            console.log("TRIED getCurrentAir(). Met with error:")
            console.log(err)
        })
}

export async function getFutureAir(requestBody) {

    axios
        .post(`${ENDPOINT}/forecast:lookup?key=${GOOGLE_KEY}`, requestBody)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log("TRIED getFutureAir(). Met with error:")
            console.log(err)
        })
}

export async function getPastAir(requestBody) {
    axios
        .post(`${ENDPOINT}/forecast:lookup?key=${GOOGLE_KEY}`, requestBody)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log("TRIED getPastAir(). Met with error:")
            console.log(err)
        })
}
