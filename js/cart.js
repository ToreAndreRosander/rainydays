function change(name) {
    var product = name.parentNode.id;
    var product1 = Number(name.parentNode.id);
    var name2 = name.id;
    var current = document.getElementById('amount' + product).innerHTML;
    var price = document.getElementById('price' + product).innerHTML;
    if(name2 == 'minus' + product){
        current--;
        
        total = current * price;
        document.getElementById("amount" + product).innerHTML = current;
        document.getElementById("total" + product).innerHTML = total;
        if(product1 <= 3) {
            cart_total();
        }

        if(current == 0) {
            document.getElementById("minus" + product).style.borderColor = 'var(--main-color-cancel-h)';
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
        if(product1 <= 3) {
            cart_total();
        }
        if(current >= 1) {
            document.getElementById("minus" + product).style.borderColor = 'var(--main-color)';
            document.getElementById("minus" + product).setAttribute( "onclick", "change(this)" );
        }
    }
    
}

function cart_total() {

    var cart1 = Number(document.getElementById("total1").innerHTML);
    var cart2 = Number(document.getElementById("total2").innerHTML);
    var cart3 = Number(document.getElementById("total3").innerHTML);
    var total = cart1 + cart2 + cart3;
    document.getElementById("total").innerHTML = total;

}

