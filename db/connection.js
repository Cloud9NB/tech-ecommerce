const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.qmbnkcn.mongodb.net/tech-ecommerce?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, { useNewUrlparser: true })
  .then(() => console.log('Connected to MongoDB 👍'))
  .catch(error => console.log(error));
