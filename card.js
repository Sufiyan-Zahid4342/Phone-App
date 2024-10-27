// 



// // localStorage.setItem('kis naam sa krwana ha' , 'value stringify wali');

// // localStorage.getItem('kis naam sa save krwaya ha');

// // JSON.stringify()
// // JSON.parse()

// console.log("hello cart");

// const data = localStorage.getItem("cart");
// const convert = JSON.parse(data);
// console.log(convert);

// let output = document.querySelector("#output");

// convert.map((item) => {
//   output.innerHTML += `<h1>${item.brand}</h1>`;
// });




console.log("hello cart");

const data = localStorage.getItem("cart");
const convert = JSON.parse(data);
console.log(convert);

let output = document.querySelector("#output");

convert.map((item, index) => {
 
  
  output.innerHTML += `
    <div class="cart-box">
      <div class="cart-box-image">
        <img src="${item.image}" />
      </div>
      <div class="cart-box-content">
        <h1>${item.brand} ${item.model}</h1>
        <p>Storage: ${item.ram} / ${item.rom}</p>
        <p>${item.camera}</p>
        <div class="quantity">
          <button onclick="minus(${index}, ${item.price})">-</button>
          <p id="qun-num-${index}">${item.quantity}</p>
          <button onclick="plus(${index}, ${item.price})">+</button>
        </div>
        <h4 id="price-${index}">Price $${item.price * item.quantity}</h4>
        <button class="buy-now" onclick="buynow()">Buy Now</button>
      </div>
    </div>
  `;
  

});


function plus(index, price) {
  let quantityElem = document.querySelector(`#qun-num-${index}`);
  let priceElem = document.querySelector(`#price-${index}`);
  quantityElem.innerHTML++;
  priceElem.innerHTML = `Price $${price * quantityElem.innerHTML}`;
}

function minus(index, price) {
  let quantityElem = document.querySelector(`#qun-num-${index}`);
  let priceElem = document.querySelector(`#price-${index}`);
  if (quantityElem.innerHTML > "1") {
    quantityElem.innerHTML--;
    priceElem.innerHTML = `Price $${price * quantityElem.innerHTML}`;
  }
}

function buynow() {
  swal({
    title: "Are you sure?",
    text: "Once you Add, Your Oder will be submited!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary phone  item has been Added", {
        icon: "success",
      });
    } else {
      swal("Your imaginary phone  item is safe in draft!");
    }
  });
}