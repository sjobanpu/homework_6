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
  }

function numberOfOrders(){
  document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
}

function makeTable(){
  var cartObject=JSON.parse(cart);
  for (var i = 0; i < cart.length; i++) {
    document.getElementById("glazing").innerHTML=cartObject[i].glazing
    document.getElementById("rolling").innerHTML=cartObject[i].rolling
    document.getElementById("quantity").innerHTML=cartObject[i],quantity
  }
}





