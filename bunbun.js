var cart;
function addToCart(){
  var quantity = document.getElementById("quantity")
  console.log("hello")
  var quantityType = quantity.value
  console.log(quantityType)
  var glazing = document.getElementById("glazing")
  var glazingType = glazing.value;
  var rolling= document.getElementById("rolling")
  var rollType=rolling.innerHTML
  // will return an empty array or a filled array
  var cartString=localStorage.getItem("cart")||"[]" ; //if else, that pulls whatever you have in the array or outputs empty array
  cart =JSON.parse(cartString)
  var obj = {"quantity":quantityType,"glazing":glazingType,"rolling":rollType}
  cart.push(obj)

  localStorage.setItem('cart',JSON.stringify(cart));

  var currLen = localStorage.len
  console.log("length: " + Number(currLen) + 1);
  localStorage.setItem('len', Number(currLen) + 1);
}

function renderCart(){
  var quantity=document.getElementById("quantity")
  var glazing=document.getElementById("glazing")
  var rolling=document.getElementById("rolling")
}


function loadData(){
  /**sizeColumn
  glazeColumn
  quantityColumn
  totalColumn
  */
  var cart = localStorage.getItem("cart");
  var cartObject = JSON.parse(cart);
  for (var i = 0; i < cart.length; i++) {
    console.log(cartObject[i].glazing);
  }
  //cart = document.getElementById("localCart").innerHTML= localStorage.getItem("cart");
}

function numberOfOrders(){
  document.getElementById("number").innerHTML=localStorage.getItem("len");
}

var cartObjects;
var items;
 function cartPage(){
  cart = localStorage.getItem("cart");
  items = JSON.parse(cart);
  loadData();
  //cartObjects=JSON.parse(cart);
}

function One(){
  hello
}

