require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const path = require('path');
const cors = require('cors');
require('./connection');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: '*',
  methods: '*',
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'view/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'view/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Express listening on port: ${port} 👍`));
