<template>
<body>

 

    <div class="header-2">
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
            <a href="/">Return Back to Homepage</a>
        </nav>
    </div>





    <div class="everything">

        <div class="container-md" id="smile">
            <div class="py-5">
                <img src="../assets/mainlogo.jpeg" width="172" height="72" class="mb-3">
                <p class="lead">&nbsp;Cart > Information > Shipping > Payment</p>
            </div>


            <h2 class="mb-3">Contact Information</h2>

            <form>

                <div class="col-sm-6">
                    <input id="email" type="text" class="form-control" placeholder="email">
                    <div class="invalid-feedback">
                        Enter an email
                    </div>

                    <div class="mt-3 form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefaultssss">
                            Email me with news and offers
                        </label>
                    </div>
                </div>


                <h3 class="mt-5">Shipping Address</h3>
                <div class="row">
                    <div class="col-sm-3">
                        <input id="firstName" type="text" class="form-control" placeholder="First Name">
                        <div class="invalid-feedback">
                            Enter a first name
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <input id="lastName" type="text" class="form-control" placeholder="Last Name">
                        <div class="invalid-feedback">
                            Enter a last name
                        </div>

                    </div>
                </div>

                <div class="mt-3 col-sm-6">
                    <input id="address" type="text" class="form-control" placeholder="Address">
                    <div class="invalid-feedback">
                        Enter an address
                    </div>
                </div>
                <div class="mt-3 col-sm-6">
                    <input id="city" type="text" class="form-control" placeholder="city">
                    <div class="invalid-feedback">
                        Enter a city
                    </div>
                </div>


                <div class="row">
                    <div class="mt-3 col-sm-2 ">
                        <select id="country" class="form-control">
                            <option value="CAD"> Canada</option>
                        </select>
                    </div>

                    <div class="mt-3 col-sm-2 ">

                        <select id="province" class="form-control">
                            <option value="ON">Ontario</option>
                            <option value="BC">British Columbia</option>
                            <option value="AB">Alberta</option>
                            <option value="SK">Saskatchewan</option>
                            <option value="MN">Manitoba</option>
                            <option value="QB">Quebec</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="PEI">Prince Edward Island</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="YK">Yukon</option>
                            <option value="NT">Northwest Territories</option>
                            <option value="NN">Nunavut</option>

                        </select>
                    </div>

                    <div class="mt-3 col-sm-2 ">
                        <input id="postCode" type="text" class="form-control" placeholder="postal code">
                        <div class="invalid-feedback">
                            Enter a postal code
                        </div>
                    </div>

                </div>




                <div class="mt-3 col-sm-6">
                    <input id="phone" type="number" class="form-control" placeholder="Phone">
                    <div class="invalid-feedback">
                        Enter a phone number to use this delivery method
                    </div>
                </div>
                <div class="mt-3  form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefaultssss">
                        Save this information for next time
                    </label>
                </div>


                <h3 class="mt-5 mb-3">Shipping Method</h3>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        Standard
                        3 to 9 business days (Free)
                    </label>
                </div>

                <h3 class="mt-5 mb-3">Payment Method</h3>

                    <div class="mt-3 col-sm-6 ">
                        <input id="cc" type="number" class="form-control" placeholder="Card Number">
                        <div class="invalid-feedback">
                            Enter Credit Card Number
                        </div>
                    </div>
                    <div class="mt-3 col-sm-6 ">
                        <input id="ccName" type="text" class="form-control" placeholder="Name On Card">
                        <div class="invalid-feedback">
                            Enter credit card owners name
                        </div>
                    </div>

                    <div class="row">
                        <div class="mt-3 col-sm-3 ">
                            <input id="exp" type="text" class="form-control" placeholder="Expiration Date (MM/YY)">
                            <div class="invalid-feedback">
                                Enter experiation date
                            </div>
                        </div>
                        <div class="mt-3 col-sm-3 ">
                            <input id="secCode" type="text" class="form-control" placeholder="Security Code">
                            <div class="invalid-feedback">
                                Enter security code
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-secondary btn-lg btn-block" id="lol">Pay Now</button>


                    <div id="msg">
                        <pre></pre>
                    </div>
            </form>
        </div>












    </div>

    
</body>



</template>
<script>

    
  export default {
    name: "CheckOut",
    components:{
    
      
      
    },
    mounted(){
        let orders = [];
        const newOrder = (event) => {
        event.preventDefault();
        let order = {
            orderNumT: Date.now(),
            email: document.getElementById('email').value,
            fName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('address').value,
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
            window.location.href = "/confirm";
        }
        console.log(a)




        console.warn('added', { orders });

    }
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('lol').addEventListener('click', newOrder);
    });
        
}

  }
</script>


<style scoped src='../assets/styles/checkout.css'></style>
<style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"); 

</style>
  






