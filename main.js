if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}

function ready(){
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');

// console.log(removeCartItem);

    for(var i=0; i<removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];  
        button.addEventListener('click', removeCartItem)
    }
}

function removeCartItem(e){
    var buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}



function updateCartTotal() {
    var totalPrice = document.getElementsByClassName('cart-total-price')[0];
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var total = 0;
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
      
      
        total = total + (quantity * price);
          
    }

    totalPrice.innerText = total;       
}

updateCartTotal();






