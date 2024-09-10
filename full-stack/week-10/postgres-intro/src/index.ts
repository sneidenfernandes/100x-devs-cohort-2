import {Client} from 'pg';


const client = new Client({
    connectionString: "postgresql://test_owner:JMcG2xUmdv7f@ep-tight-wildflower-a5s37n64.us-east-2.aws.neon.tech/test?sslmode=require"
});

client.connect();

async function CreateUsers(){
        await client.connect();
        const result = await client.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
            `);
            console.log(result);
}