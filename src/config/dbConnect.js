import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

//mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.ynfdedz.mongodb.net/test`);
// mongoose.connect(`mongodb+srv://user:user@principal.mwdxnup.mongodb.net/?retryWrites=true&w=majority`, err => {
//  console.error(err);
// });

const db = mongoose.connection;

export default db;