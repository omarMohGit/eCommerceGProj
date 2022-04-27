let orders = [];
const newOrder = (event) => {
    event.preventDefault();
    let order = {
        orderNumT: Date.now(),
        email: document.getElementById('email').value,
        fName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        addressExtra: document.getElementById('addInfo').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
        province: document.getElementById('province').value,
        postalCode: document.getElementById('postCode').value,
        phoneNum: document.getElementById('phone').value,
        cardNum: document.getElementById('cc').value,
        cardName: document.getElementById('ccName').value,
        expDate: document.getElementById('exp').value,
        secCode: document.getElementById('secCode').value
    }
    orders.push(order);
    //document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
    let a = 0;
    for (const key in order) {
        if (order[key] == '') {
            alert("not complete")
            a++;
            orders.pop(order);
            break;
        }
    }

    if (a == 0) {
        console.warn('added', { orders });
        //let pre = document.querySelector('#msg pre');
        //pre.textContent = '\n' + JSON.stringify(orders, '\t', 2);


        //saving to localStorage
        localStorage.setItem('All orders', JSON.stringify(orders));
        //document.forms[0].reset();
        window.location.href = "confirm.html";
    }
    console.log(a)




    console.warn('added', { orders });

}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lol').addEventListener('click', newOrder);
});




