import { ProductView } from "./productView.js";

window.onload = init();

function init() {
  
  new ProductView('starwars');

  new ProductView('consolas');

  new ProductView('diversos');



}