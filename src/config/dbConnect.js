import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${user}:${password}@ramencommerce.7gq7sqc.mongodb.net/primario`);

const db = mongoose.connection;

export default db;