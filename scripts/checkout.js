import { renderCartSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
// import '../data/backend-practice.js'

/*
loadProducts(() =>{
  renderCheckoutHeader();
  renderCartSummary();
  renderPaymentSummary();
});
*/

async function loadPage(){
  try{
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);
    /*
    await loadProductsFetch();
    await loadCartFetch();
  
    await new Promise((resolve) =>{
      //throw 'error2';
      loadCartFetch(() =>{
        
      //reject();

        resolve();
      });
    });
    */
  } catch(error){
    console.log('Unexpected error. Please try again later.');
  }
  

  renderCheckoutHeader();
  renderCartSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
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
*/
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