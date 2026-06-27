import { renderCartSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
// import '../data/cart-class.js';
// import '../data/car.js';

renderCheckoutHeader();
renderCartSummary();
renderPaymentSummary();