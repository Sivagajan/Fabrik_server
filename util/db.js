import {MongoClient} from 'mongodb'

const URL = process.env.MONGODB_URL
const DB = process.env.DB_NAME

const client = new MongoClient(URL)

let db

export const connectToDb = async () => {

    if(db) return db

    await client.connect()
    db = client.db(DB)

    return db
}
