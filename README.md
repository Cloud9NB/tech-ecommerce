# `Tech E-Commerce`

A full stack MERN E-Commerce app where users can register/login and be able to browse / add to cart and be able to purchase using Stripe.

Admins can add / edit / delete products and view / change the status of the orders.

When an order is placed admins will receive a real time notification. Customers also get a notification when the admin changes the status of their order.

## `Live Link`

Click here for a live link --> [Tech E-Commerce](https://mern-tech-ecommerce.adaptable.app)

Admin email: admin@gmail.com

Admin Password: 12!@qwQW

Fake Credit Card: `4242424242424242` 04/24 `242` 42424

## `Screenshots`

![Sign-up](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/signUp.png?raw=true)
![Main Page](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/mainPage.png?raw=true)
![All Products](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/allProducts.png?raw=true)
![Per Category](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/mainPage.png?raw=true)
![Cart](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/cart.png?raw=true)
![Customer Orders](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/customerOrders.png?raw=true)
![Admin Dashboard](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/adminDashboard.png?raw=true)
![Create Product](https://github.com/Cloud9NB/tech-ecommerce/blob/master/view/public/docs/screenshots/createProduct.png?raw=true)

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
  }
```

### Server Side

```js
"dependencies": {
  "@reduxjs/toolkit": "^1.8.5",
  "@stripe/react-stripe-js": "^1.10.0",
  "@stripe/stripe-js": "^1.36.0",
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
  "socket.io-client": "^4.5.2",
  "thunk": "^0.0.1"
}
```

## `Database`

- MongoDB
