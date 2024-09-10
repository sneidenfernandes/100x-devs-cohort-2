import {Client} from 'pg';


const client = new Client({
    host: 'localhost',
    port: 5433,  // Port you mapped on the host
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres',  // Default database
  });

// create table
async function createUsers(){
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


// insert a user into the table

type userCredentials = {
    username: string,
    email: string,
    password: string,
}

async function insertUsers({username,email,password}:userCredentials): Promise<void> {
    try{
        await client.connect();
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1,$2,$3);`
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:',res) // Output insertion result


    } catch(err){
        console.error("Error during insertion:", err);
    }

}


// query all users
async function selectUsers(){
    try{
        await client.connect();
        const insertQuery = `SELECT * FROM USERS;`
        const res = await client.query(insertQuery);
        console.log('Insertion success:',res) // Output insertion result


    } catch(err){
        console.error("Error during insertion:", err);
    }

}

const userDetails: userCredentials = {
    username: "somethingwer",
    email: 'someone@something.com',
    password: 'sadfasdf'
}


async function findEmail(email:string): Promise<void>{
    await client.connect();
    const query = 'SELECT * FROM USERS WHERE email = $1'
    const res = await client.query(query,[email])
    console.log(res);
}


findEmail('someone@something.com');