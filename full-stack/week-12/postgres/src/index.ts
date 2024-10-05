import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost:5412/postgres"

});



async function createUsersTable() {
  try {
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
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await client.end();
  }
}

async function createAddressesTable() {
    try {
      await client.connect();
      const result = await client.query(`
       CREATE TABLE addresses (
       id SERIAL PRIMARY KEY,
       user_id INTEGER NOT NULL,
       city VARCHAR(100) NOT NULL,
       country VARCHAR(100) NOT NULL,
       street VARCHAR(255) NOT NULL,
       pincode VARCHAR(20),
       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
       )
      `);
  
      console.log(result);
    } catch (err) {
      console.error("Error creating table:", err);
    } finally {
      await client.end();
    }
  }


async function insertUserData(username: string, password: string, email: string){

    await client.connect()
    const result = await client.query(`
        INSERT INTO users VALUES('$1', '#2', '#3');
        `, [username, password, email])
    console.log(result)
    
}


