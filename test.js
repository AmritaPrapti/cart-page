let removeCartItem = document.getElementsByClassName('btn-danger');

// console.log(removeCartItem);

for(var i=0; i<removeCartItem.length; i++){
    let button = removeCartItem[i];
    
    button.addEventListener('click', function(){
        let buttons = button.parentElement.parentElement;
        buttons.remove();
        updateCartTotal();
    })
}

function updateCartPrice() {
    let p = 0;
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var quantity = quantityElement.value;
        var newPrice =  parseFloat(priceElement.innerText.replace('$', '')) * quantity;
        priceElement.innerText = '$' + newPrice;
    }

}

function updateCartTotal() {
    let totalPrice = document.getElementsByClassName('cart-total-price')[0];
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let total = 0;
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (quantity * price);
          
    }

    totalPrice.innerText = total;
   
    
}







