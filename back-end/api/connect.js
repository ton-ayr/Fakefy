import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGODB_URI;

if (!URI) {
    throw new Error("A variável MONGODB_URI não está definida no .env");
}

const client = new MongoClient(URI);

export const db = client.db("Fakefy");
