export class ProductService{

  constructor(productView) {
    this.productView = productView;
  }

  getProducts() {
    const url = 'https://raw.githubusercontent.com/Crisledezma/Challenge-ONE-Front-End-Sprint-02-E-Commerce/main/db.json'
    var request = new XMLHttpRequest();
    request.open('GET','db.json', url);
    request.onload = this.sendInfo.bind(this);
    request.send();
  }

  setProduct(data) {
    const url = 'https://raw.githubusercontent.com/Crisledezma/Challenge-ONE-Front-End-Sprint-02-E-Commerce/main/db.json'
    var request = new XMLHttpRequest();
    request.open('POST','db.json', url);
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
//API KEY SHEETSON.COM
//MiwGhM64QcKdol94znkAj8sYF5HeCnSfveMFpaTM_deJ0DzNQoaMRkkx0vk
//API KEY READ ONLY
//xyVmOgiAlt9yZ4fdGnNJENpz3AMGVuUhvwFUkAGBLvkkf_47w7XZB7do_gM6ag