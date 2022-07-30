export class ProductService{

  constructor(productView) {
    this.productView = productView;
  }

  getProducts() {

    const url = '../db.json'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = this.sendInfo.bind(this);
    request.send();
  }

  sendInfo(e) {
    var request = e.target;
    if (request.readyState === 4) {
      if (request.status === 200) {
        this.productView.getProducts(JSON.parse(request.responseText));
      }
    }
  }

}