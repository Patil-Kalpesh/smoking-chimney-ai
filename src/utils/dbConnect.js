import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectionStr() {
  if (client.isConnected()) {
    return { db: client.db() };
  }
  await client.connect();
  return { db: client.db() };
}
