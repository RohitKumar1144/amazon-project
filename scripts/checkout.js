import { renderCartSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js'

/*
loadProducts(() =>{
  renderCheckoutHeader();
  renderCartSummary();
  renderPaymentSummary();
});
*/
Promise.all([
  new Promise((resolve) =>{
    loadProducts(() =>{
      resolve();
    })
  }),
  new Promise((resolve) =>{
    loadCart(() =>{
      resolve();
    });
  }),
]).then(() =>{
    renderCheckoutHeader();
    renderCartSummary();
    renderPaymentSummary();
});

/*

new Promise((resolve) =>{
 loadProducts(() =>{
  resolve();
 })
})
.then(() =>{
 return new Promise((resolve) =>{
  loadCart(() =>{
    resolve();
  });
 });
})
.then(() =>{
  return new Promise(() =>{
    renderCheckoutHeader();
    renderCartSummary();
    renderPaymentSummary();
  });
});

*/