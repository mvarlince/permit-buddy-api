import {MongoClient} from 'mongodb'
import { db_creds } from './secret.js'

export default function db_connect() {
    const mongoClient =  new MongoClient(db_creds.uri)
    return mongoClient.db(db_creds.db)
}