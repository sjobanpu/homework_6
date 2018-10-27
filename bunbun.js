var cart;
function addToCart(){
  var quantity = document.getElementById("quantity");
  var quantityType = quantity.value
  var glazing = document.getElementById("glazing");
  var glazingType = glazing.value;
  var rolling= document.getElementById("rolling");
  var rollType=rolling.innerHTML
  // will return an empty array or a filled array
  var cartString=localStorage.getItem("cart")||"[]" ; //if else, that pulls whatever you have in the array or outputs empty array
  cart =JSON.parse(cartString);
  var obj = {"quantity":quantityType,"glazing":glazingType,"rolling":rollType};
  cart.push(obj);

  localStorage.setItem('cart',JSON.stringify(cart));
}

function loadData(){
  document.getElementById("localCart").innerHTML=localStorage.getItem("cart");
  // var cart = localStorage.getItem("cart");
  // var cartObject = JSON.parse(cart);
  // for (var i = 0; i < cart.length; i++) {
  //   console.log(cartObject[i].glazing);
  }

function numberOfOrders(){
  console.log(document.getElementById("number"));
  document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
}

// var cartObjects;
var items;
function cartPage(){
  cart = localStorage.getItem("cart");
  items = JSON.parse("cart");
  loadData();
  //cartObjects=JSON.parse(cart)
}




