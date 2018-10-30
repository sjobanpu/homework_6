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

  var Duplicate_found = false
  var cart_item = 0
  for (var i = 0; i < cart.length; i++){
    if (cart[i].glazing == obj.glazing &&  //iterating throught the length of the cart and looking at chars
        cart[i].rolling == obj.rolling){ //checking type and value
        Duplicate_found = true;
        cart_item=i;
    }
  }
  if (!Duplicate_found){ //if it is a new value, push to cart
    cart.push(obj);
    localStorage.setItem('cart',JSON.stringify(cart));
    document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
  }else{ //if the item is already in the cart just add to the quantity of buns
    localStorage.setItem('cart',JSON.stringify(cart));
    document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
    var temp = parseInt(cart[cart_item].quantity) //converting a string to an integer
    temp +=parseInt(obj.quantity);
    cart[cart_item].quantity = temp
    localStorage.setItem('cart',JSON.stringify(cart));
    document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
  }
}

function loadData(){
  document.getElementById("localCart").innerHTML=localStorage.getItem("cart");
  }

function numberOfOrders(){
  document.getElementById("number").innerHTML=JSON.parse(localStorage.cart).length;
}

var productName = {
  "Orange Marmalade":"orange2.png",
  "Lemon Lavendar": "lemon2.png",
  "Pecan Spice": "pecan2.png",
  "Pumpkin Pecan" : "pumpkin2.png",
  "Apple Cider" : "apple2.png",
  "Original Cinnamon" : "original2.png"
}

function renderCart(){
  var cart=JSON.parse(localStorage.cart || "[]");
  console.log("localStorage.cart.length")
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    var name = productName[object.rolling]
    console.log(object.rolling)
    console.log(name)
    var row = '<tr>'+
              '<td>'+ "<img src=' " + name + "' />" + object.rolling +'</td>' +
              '<td>'+object.glazing+ '</td>' +
              '<td>' + object.quantity+'</td>'+
              '<td>'+"$"+(object.quantity*2)+'</td>'+
              '<td class="delete">'+"<img src='delete-icn.svg'>"+'</td>' +
              '</tr>';
    localStorage.setItem('cart',JSON.stringify(cart));
    $('#table').append(row);
    $(".delete").click(del)
  }
}

function del(){
  var row = this.parentNode //parentnode of td is tr
  row.parentNode.removeChild(row)
}