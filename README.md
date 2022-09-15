# `Tech E-Commerce (Project is still work in progress)`

A full stack MERN E-Commerce app where users can register/login and be able to browse / add to cart products and be able to purchase using Stripe.

Admins can add / edit products(TBA)

## `Live Link`

N/A [Tech E-Commerce]

## `Screenshots`

![Before Login]()
![Login]()
![Main Page]()

## `Running the project`

Version Requirements

```js
"engines": {
    "node": "16.15.0",
    "npm": "8.5.5"
  }
```

You need **TWO** other terminal windows/tabs for this.

In one terminal. Run `npm install && npm start` to install and launch the server.

In the other terminal, run `cd view && npm install && npm start` to install and launch the client side then go to `http://localhost:3000/` in your browser.

## `Dependencies`

### Client Side

```js
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.5",
    "axios": "^0.27.2",
    "bootstrap": "^5.2.0",
    "react": "^18.2.0",
    "react-alice-carousel": "^2.6.4",
    "react-bootstrap": "^2.5.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2",
    "react-router-bootstrap": "^0.26.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",
    "thunk": "^0.0.1"
  },
```

### Server Side

```js
"dependencies": {
    "bcrypt": "^5.0.1",
    "cloudinary": "^1.31.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "mongoose": "^6.5.4",
    "socket.io": "^4.5.1",
    "stripe": "^10.7.0",
    "validator": "^13.7.0"
  }
```

## `Database`

- MongoDB
