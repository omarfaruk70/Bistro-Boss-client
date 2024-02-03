/***
 * 1. install stripe and stripe react 
 * 2. create card element.
 * 3. Create stripe account and get publishable key(PK)
 * 4. use publishable key and use stripe to get card information. if error, show the error 
 * 5. create payment intent and post on the server. and return the client secret on the client side.
 * install stripe on the server side and get client secret also grand price for pay. make sure you use the payment method types: ['card']
 * 6. from client side get the client secret and save it
 * 7. use Confirmcardpayment and pass user details information, card, and client secret
 * 8. display transection id for user
 */