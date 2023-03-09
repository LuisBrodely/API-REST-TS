import 'dotenv/config'
import { connect } from 'mongoose'

async function dbConnect(): Promise<void> {
    const DB_URI = 'mongodb://localhost:27017/local'
    await connect(DB_URI)
}

export default dbConnect