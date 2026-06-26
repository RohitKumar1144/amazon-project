import { renderCartSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import '../data/cart-oop.js';

renderCheckoutHeader();
renderCartSummary();
renderPaymentSummary();