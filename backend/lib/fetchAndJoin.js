import { initializeDatabase } from "./singlestoreClient.js";

export async function fetchAndJoin(lat, long) {
    const db = await initializeDatabase(); // Connect to the DB

    let traffic_table;

    try {
        traffic_table = db.table.use('traffic_table');
    }
    catch (error) {
        console.error('Table error:', error);
    }

    let airquality_table;

    try {
        airquality_table = db.table.use('airquality_table');
    }
    catch (error) {
        console.error('Table error:', error);
    }
    
    const joinData = await traffic_table.find({
        select: ['frc', 'currentSpeed', 'freeFlowSpeed', 'currentTravelTime', 'freeFlowTravelTime', 'airquality.aqi', 'airquality.red', 'airquality.green', 'airquality.blue', 'airquality.category', 'airquality.dominant_pollutant'],
        join: [{
            type: 'FULL',
            table: 'airquality_table',
            as: 'airquality',
            on: ['latitude', '=', 'latitude'],
        }],
        where: { latitude: String(lat), longitude: String(long) },
        limit: 1,
    });
    
    return joinData;
}

