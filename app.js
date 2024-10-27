const phones = [
    {image:"https://th.bing.com/th/id/R.e65f0665a9956aee6c08d75e6a7b491d?rik=lMi7CwGG01c4iQ&pid=ImgRaw&r=0",
      brand: "Samsung",
      model: "Galaxy S21",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 799,
    },
    {image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large_2x.jpg",
      brand: "Apple",
      model: "iPhone 13",
      ram: 4,
      rom: 128,
      camera: "12 megapixel",
      price: 799,
    },
    {image:"https://www.bhphotovideo.com/images/images2500x2500/oneplus_5011101665_9_pro_128gb_5g_1629057.jpg",
      brand: "OnePlus",
      model: "9",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 729,
    },
{
  image:"https://th.bing.com/th/id/OIP.iO9kxZwl_f2mQk-EGSy-_QHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain",
        brand: "Google",
      model: "Pixel 6",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 599,
    },
    {image:"https://th.bing.com/th/id/OIP.9OMom0Di_nOtxjK_1RSnVAHaHa?rs=1&pid=ImgDetMain",
      brand: "Xiaomi",
      model: "Mi 11",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 749,
    },
    {image:"https://th.bing.com/th/id/OIP.r-Qs3aD-aFLRpaRASF9lTQHaHa?rs=1&pid=ImgDetMain",
      brand: "Sony",
      model: "Xperia 1 III",
      ram: 12,
      rom: 256,
      camera: "12 megapixel",
      price: 1299,
    },
    {image:"https://th.bing.com/th/id/OIP._oAqxFAjPTAHnzVvV3sN5AAAAA?rs=1&pid=ImgDetMain",
      brand: "Oppo",
      model: "Find X3 Pro",
      ram: 12,
      rom: 256,
      camera: "50 megapixel",
      price: 1149,
    },
    {image:"https://th.bing.com/th/id/OIP.yo8YtEl0UbFzODPWRbOS6wHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
      brand: "Vivo",
      model: "X60 Pro",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 999,
    },
    {image:"https://th.bing.com/th/id/R.91256bbc3221386d33cd36e0d17ff192?rik=V%2fN2wzufmyzxYQ&pid=ImgRaw&r=0",
      brand: "Nokia",
      model: "G50",
      ram: 4,
      rom: 128,
      camera: "48 megapixel",
      price: 299,
    },
    {image:"https://th.bing.com/th/id/OIP.m4ReGMMQlNZarCXqkRmtKgHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
      brand: "Motorola",
      model: "Edge 20",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 599,
    },
    {image:"https://www.chooseyourmobile.com/wp-content/uploads/2021/03/Realme-GT-5G-All-Colors-1024x682.jpg",
      brand: "Realme",
      model: "GT",
      ram: 12,
      rom: 256,
      camera: "64 megapixel",
      price: 499,
    },
    {image:"https://www.bing.com/images/blob?bcid=qA4DAC9.OawHrw",
      brand: "Asus",
      model: "ROG Phone 5",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
    },
    {image:"https://th.bing.com/th/id/R.e052e7dfc14937e3df101d6b8e95ca03?rik=D2TunGqH%2fCUNng&pid=ImgRaw&r=0",
      brand: "HTC",
      model: "Desire 21 Pro",
      ram: 8,
      rom: 128,
      camera: "48 megapixel",
      price: 399,
    },
    {image:"https://m.media-amazon.com/images/I/610uWzNVzRL._AC_SL1000_.jpg",
      brand: "Huawei",
      model: "P40 Pro",
      ram: 8,
      rom: 256,
      camera: "50 megapixel",
      price: 899,
    },
    {image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/lg_top_8.jpg",
      brand: "LG",
      model: "Wing",
      ram: 8,
      rom: 256,
      camera: "64 megapixel",
      price: 999,
    },
    {image:"https://www.gizchina.com/wp-content/uploads/images/2021/01/ZTE-Axon-30-Pro-a-e1611858926787.jpg",
      brand: "ZTE",
      model: "Axon 20",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 399,
    },
    {image:"https://liliputing.com/wp-content/uploads/2020/08/blackberry-key2-le-587x500.jpg",
      brand: "BlackBerry",
      model: "KEY2",
      ram: 6,
      rom: 64,
      camera: "12 megapixel",
      price: 649,
    },
    {image:"https://www.giztop.com/media/catalog/product/cache/16c8d0750a29c828f25a0e7d7ec24d2a/l/e/legion-pro-11.jpg",
      brand: "Lenovo",
      model: "Legion Phone Duel",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
    },
    {image:"https://th.bing.com/th/id/OIP.meNJp33yY7RgejDy-Fyy2wHaIJ?w=500&h=550&rs=1&pid=ImgDetMain",
      brand: "Alcatel",
      model: "3L",
      ram: 4,
      rom: 64,
      camera: "48 megapixel",
      price: 199,
    },
    {image:"https://th.bing.com/th/id/R.bd62b36cb3a6fc8bb6d723f52680144e?rik=2Cl4xpQIawvHUQ&pid=ImgRaw&r=0",
      brand: "TCL",
      model: "10 Pro",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 449,
    },
  ];
  






// const Output=document.querySelector(".ol");
// // const btn1=document.querySelector(".btn1");
// //  const cardItems=[]
// let cardItems=[];
// const checckDataFromLocalStorage=JSON.parse(localStorage.getItem("cart" ));
// if(checckDataFromLocalStorage===null){
//   cardItems=[];

// }else{
//   cardItems=[...checckDataFromLocalStorage];
// }
// console.log("cartitems===>", cartItems);



//     phones.forEach((item, index) => {
//         Output.innerHTML += `
//         <div class="cards">
//          <img src="${item.image}" alt="Model ${item.brand} ${item.model}" class="card-image" />
//                   <h3>Model ${item.brand} ${item.model}</h1>
//                   <h3>price $${item.price}</h1>
//                   <button class="btn btn-primary mt-3" onclick="addToCart(${index})">Add to Cart</button>
//         </div>
//         `
//       });


//       function addToCart(index){
//         swal({
//             title: "Item Added!",
//             text: "You clicked the button!",
//             icon: "success",
//             button: "Confirm",
//           });
        
//         const selected=cardItems.indexOf(phones[index])
//         if(selected===-1){
//             phones[index].quantity=1;
//             cardItems.push(phones[index]);
//             // console.log(cardItems);
            

//         }else{
//             cardItems[selected].quantity+=1;
//         }
//         console.log(cardItems);
//       }

//       function checkOut(){
//         console.log("item added");
//         const convartArrIntoStr=JSON.stringify(cardItems);
//         localStorage.setItem("cart",convartArrIntoStr)
//         window.location="card.html"
//       }
















const Output = document.querySelector(".ol"); // Ensure this element exists in the HTML
let cardItems = []; // Make sure 'cardItems' is defined

// Retrieve data from localStorage and parse it
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage !== null) {
  cardItems = [...checkDataFromLocalStorage];
}

console.log("cardItems ===>", cardItems);

// Ensure `phones` array exists
if (phones && Array.isArray(phones)) {
  phones.forEach((item, index) => {
    Output.innerHTML += `
      <div class="cards">
        <img src="${item.image}" alt="Model ${item.brand} ${item.model}" class="card-image" />
        <h3>Model ${item.brand} ${item.model}</h3>
        <h3>Price $${item.price}</h3>
        <button class="btn btn-primary mt-3" onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
} else {
  console.error("The 'phones' array is not defined.");
}

function addToCart(index) {
  swal({
    title: "Item Added!",
    text: "You clicked the button!",
    icon: "success",
    button: "Confirm",
  });

  const selected = cardItems.findIndex(item => item.model === phones[index].model);
  if (selected === -1) {
    phones[index].quantity = 1;
    cardItems.push(phones[index]);
  } else {
    cardItems[selected].quantity += 1;
  }

  console.log("Updated cardItems:", cardItems);
}

function checkOut() {
  console.log("Proceeding to checkout...");
  const cartString = JSON.stringify(cardItems);
  localStorage.setItem("cart", cartString);
  window.location = "card.html";
}




