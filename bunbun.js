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
  document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
}

function loadData(){
  document.getElementById("localCart").innerHTML=localStorage.getItem("cart");
  }

function numberOfOrders(){
  document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
  }

function productName(){
  "orangeMarmalade":"orange2.png"
  "lemonLavendar": "lemon2.png"
  "pecanSpice": "pecan2.png"
  "pumpkinPecan" : "pumpkin2.png"
  "appleCider" : "apple2.png"
  "originalCinnamon" : "original2.png"}

function renderCart(){
  var cartObject=JSON.parse(localStorage.cart).length;
  console.log("localStorage.cart.length")
  var table = document.createElement('table');
  var name = productName[object.rolling]
      for (var i = 0; i < cart.length; i++) {
        var row = '<tr>'+
                  '<td>'+object.rolling+'</td>' +
                  '<td>'+"<img src='" + name + ".png'/></td>"+
                  '<td>'+object.glazing+'</td>' +
                  '<td>'+object.quantity+'</td>'+
                  '</tr>';
        $('table').append(row);
        $('.shopping-cart').append('table')

        if(obj.Type=='Error') {
            $('table').find('td:last').after('<td>'+ obj.ErrorCode+'</td>');}








