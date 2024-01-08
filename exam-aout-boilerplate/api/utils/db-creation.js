const { MongoClient } = require('mongodb');
const { dbDataInput } = require('./db-data');

const { MONGODB_URI, DB_NAME } = require('./config');

async function createDbWithData(mongoMemoryServer) {
  const client = new MongoClient(MONGODB_URI ?? mongoMemoryServer.getUri(), {
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(DB_NAME ?? "exam-web3");

    const collection1 = database.collection('jokes');
    const collection2 = database.collection('scores');

    const documentCount = await collection1.countDocuments();
    if (documentCount === 0) {
      await importData(collection1, dbDataInput.jokes);
      await importData(collection2, dbDataInput.scores);
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    client.close();
  }
}

async function importData(collection, data) {
  try {
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted successfully`);
  } catch (error) {
    console.error('Error inserting documents:', error);
  }
}

module.exports = { createDbWithData };
