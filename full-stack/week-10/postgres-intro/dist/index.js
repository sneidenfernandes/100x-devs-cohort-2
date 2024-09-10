"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5433, // Port you mapped on the host
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres', // Default database
});
// create table
function createUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
            `);
        console.log(result);
    });
}
function insertUsers(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, email, password }) {
        try {
            yield client.connect();
            const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1,$2,$3);`;
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error("Error during insertion:", err);
        }
    });
}
// query all users
function selectUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = `SELECT * FROM USERS;`;
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error("Error during insertion:", err);
        }
    });
}
const userDetails = {
    username: "somethingwer",
    email: 'someone@something.com',
    password: 'sadfasdf'
};
function findEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = 'SELECT * FROM USERS WHERE email = $1';
        const res = yield client.query(query, [email]);
        console.log(res);
    });
}
findEmail('someone@something.com');
