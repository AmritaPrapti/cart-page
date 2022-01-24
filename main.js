let removeCartItem = document.getElementsByClassName('btn-danger');

// console.log(removeCartItem);

for(var i=0; i<removeCartItem.length; i++){
    let button = removeCartItem[i];
    
    button.addEventListener('click', function(){
        let buttons = button.parentElement.parentElement;
        buttons.remove();
        
    })
}

