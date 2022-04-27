//Here I used Ajax to access the server to update the information for our products
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://127.0.0.1:2500/UpdatePrices',true);
ourRequest.onload = function(){
    let data = JSON.parse(this.responseText);
    
    for(let i =1; i<=9; i++){
        var price = data[i-1]["price"];
        console.log(data[i-1]["price"]);
        document.getElementById(`price${i}`).innerHTML= price;
    }

    for(let i =1; i<=9; i++){
        var sale = data[i-1]["sale"];
        console.log(data[i-1]["sale"]);
        document.getElementById(`disc${i}`).innerHTML= sale + "%";
    }

}
//This actually sends our request to the webpage hosted by our server
ourRequest.send();

function butt() {
    var del = document.getElementsByClassName('delButt')
    var numItem = document.getElementsByClassName('totalAmountItem')
    var atc = document.getElementsByClassName('add')
    for (var a = 0; a < del.length; a++) {
        var delButtAll = del[a]
        delButtAll.addEventListener('click', deleteItemC)
    }


    for (var b = 0; b < numItem.length; b++) {
        var amounts = numItem[b]
        amounts.addEventListener('change', quantityChanged)
    }

    for (var c = 0; c < atc.length; c++) {
        var added = atc[c]
        added.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('buy')[0].addEventListener('click', purchaseClicked)
}
function addToCartClicked(event) {
    var atc = event.target
    var item = atc.parentElement.parentElement

    var name = item.getElementsByClassName('iName')[0].innerText
    var price = item.getElementsByClassName('cost')[0].innerText
    var pic = item.getElementsByClassName('pics')[0].src

    addItemToCart(name, price, pic)
    updateCartTotal()
}




function deleteItemC(event) {
    var deleted = event.target
    deleted.parentElement.parentElement.remove()

    updateCartTotal()
}

function quantityChanged(event) {
    var quantityN = event.target
    if (quantityN.value <= 0) {
        quantityN.value = 1
    }
    updateCartTotal()
}


function addItemToCart(name, price, pic) {
    var items = document.getElementsByClassName('carti')[0]
    var cartIN = items.getElementsByClassName('inside')

    var row = document.createElement('div')
    row.classList.add('lineup')


    for (var d = 0; d < cartIN.length; d++) {
        if (cartIN[d].innerText == name) {
            return
        }
    }


    var display
        = `
        <div class="cart-item x">
            <img class="reframe" src="${pic}">
            <span class="inside">${name}</span>
        </div>
        <span class="itemCost x">${price}</span>
        <div class="cart-quantity x">
            <input class="totalAmountItem" type="number" value="1">
            <button class="btn delButt" type="button">Remove</button>
        </div>`

    row.innerHTML = display


    items.append(row)
    row.getElementsByClassName('delButt')[0].addEventListener('click', deleteItemC)
    row.getElementsByClassName('totalAmountItem')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cont = document.getElementsByClassName('carti')[0]
    var totalRows = cont.getElementsByClassName('lineup')
    var total = 0


    for (var e = 0; e < totalRows.length; e++) {
        var row = totalRows[e]
        var priceTag = row.getElementsByClassName('itemCost')[0]
        var quantTag = row.getElementsByClassName('totalAmountItem')[0]

        var price = parseFloat(priceTag.innerText.replace('$', ''))
        var quantity = quantTag.value
        total = total + (price * quantity)
    }


    total = Math.round(total * 100) / 100
    document.getElementsByClassName('fTotal')[0].innerText = '$' + total

}
function purchaseClicked() {
    window.location.href = "checkout.html";
}
butt()