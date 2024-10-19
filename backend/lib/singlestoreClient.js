import { SingleStoreClient } from "@singlestore/client";
import dotenv from 'dotenv';

const client = new SingleStoreClient();

// Load the environment variables from the .env file
dotenv.config();

export async function initializeDatabase() {
  try {
    const connection = client.connect({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT,
    })

    const database_1 = await connection.database.create({
      name: "database_1",
      tables: {},
    });

    const users_table = await database_1.table.create({
      name: "users_table",
      columns: {
        username: { type: "TEXT", nullable: false },
        password: { type: "TEXT", nullable: true },
      },
    });

    const traffic_table = await database_1.table.create({
      name: "traffic_table",
      columns: {
        frc: { type: "TEXT", nullable: false },
        currentSpeed: { type: "INT", nullable: false },
        freeFlowSpeed: { type: "INT", nullable: false },
        currentTravelTime: { type: "INT", nullable: false },
        freeFlowTravelTime: { type: "INT", nullable: false },
        confidence: { type: "FLOAT", nullable: false },
        roadClosure: { type: "BOOLEAN", nullable: false },
      },
    });
    return database_1;
    
  } catch (error) {
    console.error("Error:", error);
  }
}