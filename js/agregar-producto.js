import { ProductService } from "./productService.js";



const service = new ProductService();

const btn = document.getElementById('btn');
btn.addEventListener('click', submit);


function submit(e) {
  e.preventDefault();
  let formUrl = document.getElementById('formUrl');
  let formCat = document.getElementById('formCat');
  let formName = document.getElementById('formName');
  let formPrice = document.getElementById('formPrice');
  let formDesc = document.getElementById('formDesc');
  setProduct(formUrl.value, formCat.value, formName.value, formPrice.value, formDesc.value);
  formUrl.value = '';
  formCat.value = 'Seleccione una opción';
  formName.value = '';
  formPrice.value = '';
  formDesc.value = '';
};


function setProduct(formUrl, formCat, formName, formPrice, formDesc){
  const dataAdd = `
  {
    "name": "${formName}",
    "price": ${formPrice},
    "cat": "${formCat}",
    "desc": "${formDesc}",
    "url": "${formUrl}"
    },
  `;
  service.setProduct(dataAdd);
}



