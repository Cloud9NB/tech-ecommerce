const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  createPayment: async (req, res) => {
    const { amount } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: 'cad',
        payment_method_types: ['card'],
      });

      res.status(200).json(paymentIntent);
    } catch (error) {
      console.log('Error~', error.message);

      res.status(403).send(error.message);
    }
  },
};
