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

        if(current == 0) {
            document.getElementById("minus" + product).style.borderColor = 'var(--text-color-light)';
            document.getElementById("minus" + product).setAttribute( "onclick", "" );
        }
        else if(current >= 1) {
            document.getElementById("minus" + product).style.borderColor = 'var(--main-color)';
            document.getElementById("minus" + product).setAttribute( "onclick", "change(this)" );
        }
    }

    else if(name2 == 'plus' + product) {
        current++;
        total = current * price;
        document.getElementById("amount" + product).innerHTML = current;
        document.getElementById('total' + product).innerHTML = total;
        if(current >= 1) {
            document.getElementById("minus" + product).style.borderColor = 'var(--main-color)';
            document.getElementById("minus" + product).setAttribute( "onclick", "change(this)" );
        }
    }
    
}

