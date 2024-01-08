const { MONGODB_URI, PORT, DB_NAME } = require('./utils/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const middlewares = require('./utils/middlewares');
const { createDbWithData } = require('./utils/db-creation');
const { asyncStartMongMemoryServer } = require('./utils/mongo-memory-server');

const startAsyncDbWork = async () => {
  try {
    if (!MONGODB_URI) {
      const mongoMemoryServer = await asyncStartMongMemoryServer();
      await createDbWithData(mongoMemoryServer);
      // Connect to database
      await mongoose.connect(mongoMemoryServer.getUri(), {
        dbName: DB_NAME ?? 'exam-web3',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to database via Mongoose');
      return;
    }

    // Connect to database
    await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME ?? 'exam-web3',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database via Mongoose');
  } catch (err) {
    console.error('Unable to connect to database', err);
  }
};

startAsyncDbWork();

// Create server
const app = express();

// Init server
app.use(cors());
app.use(express.json());
app.use(middlewares.logger);

app.use('/jokes', require('./routes/jokes'));
app.use('/scores', require('./routes/scores'));

app.use(middlewares.errorHandler);

// Start server
app.listen(PORT ?? 3001, () => {
  console.log(`Server running on port ${PORT ?? 3001}`);
});
