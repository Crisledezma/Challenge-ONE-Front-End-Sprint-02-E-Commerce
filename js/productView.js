import { ProductService } from "./productService.js";

export class ProductView {

  constructor(category) {

    this.products = [];

    this.service = new ProductService(this);
    this.service.getProducts();

    this.parent = document.getElementById(category);
    
  }
  
  getProducts(pProducts) {
    this.products = pProducts
    this.buildCards(this.products);
  }
  
  buildCards(products) {
    
    products.forEach(product => {

      if (product.cat.trim().toLowerCase().replace(' ','') == this.parent.id.trim().toLowerCase().replace(' ','')) { 

        this.mainDiv = document.createElement('div');
        this.mainDiv.innerHTML = `
          <div class="producto-productos">
            <img src="${product.url}" alt="${product.name}">
            <h3>${product.name}</h3>
            <h2>$${product.price}</h2>
            <h3>Ver Producto</h3>
          </div>
        `;
        this.parent.appendChild(this.mainDiv);
      };
      
    });
  }

}