const { MongoMemoryServer } = require('mongodb-memory-server');

// This will create an new instance of "MongoMemoryServer" and automatically start it
async function asyncStartMongMemoryServer() {
  const mongoMemoryServer = await MongoMemoryServer.create({
    instance: {
      port: 27017, // by default choose any free port
      ip: `::,0.0.0.0`, // by default '127.0.0.1', for binding to all IP addresses set it to `::,0.0.0.0`,
      // dbName?: string, // by default '' (empty string)
    },
  });

  return mongoMemoryServer;
}

module.exports = { asyncStartMongMemoryServer };
