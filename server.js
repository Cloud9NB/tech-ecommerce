require('dotenv').config();
require('./db/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const path = require('path');
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: '/',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = require('./routes/userRoutes');
const products = require('./routes/productRoutes');
const cart = require('./routes/cartRoutes');
const payment = require('./routes/paymentRoute');
const orders = require('./routes/orderRoutes');

app.use('/users', users);
app.use('/products', products);
app.use('/cart', cart);
app.use('/payment', payment);
app.use('/orders', orders);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'view/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'view/build', 'index.html'));
  });
}

server.listen(port, () => console.log(`Express listening on port: ${port} 👍`));

app.set('socketio', io);
