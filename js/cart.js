function change(name) {
    var product = name.parentNode.id;
    var name2 = name.id;
    var current = document.getElementById('amount' + product).innerHTML;
    var price = document.getElementById("price" + product).innerHTML;
    if(name2 == 'minus' + product){
        current--;
        
        total = current * price;
        document.getElementById("amount" + product).innerHTML = current;
        document.getElementById("total" + product).innerHTML = total;
    }

    else if(name2 == 'plus' + product) {
        current++;
        total = current * price;
        document.getElementById("amount" + product).innerHTML = current;
        document.getElementById('total' + product).innerHTML = total;
    }
    
}

