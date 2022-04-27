<template>
<body>

    <!-- header section starts  -->





    <header>

        <div class="header-1">
            <a href="#" class="logo"> <img src="../assets/mainlogo.jpeg" width="172" height="72"></a>
            <form action="" class="search-box-container">
                <input type="search" id="search-box" placeholder="search here...">
                <label for="search-box" class="fas fa-search"></label>
            </form>
        </div>

        <div class="header-2">
            <div id="menu-bar" class="fas fa-bars"></div>
            <nav class="navbar">
                <a href="/">home</a>
                <a href="#category">category</a>
                <a href="#product">product</a>
                <a href="#contact">contact</a>
                <a href="#">login</a>
                <a href="/checkout">checkout</a>

            </nav>


        </div>


    </header>


    <!-- header section ends -->
    <section class="contact2" id="contact2">
        <form action="">
            <div class="inputBox">
                <input type="text" placeholder="username" id="uName">
            </div>

            <div class="inputBox">
                <input type="password" placeholder="password" id="pass">
            </div>
            <!--  
            <input type="submit" value="Login" class="btn">
            -->
            <button type="button" v-on:click="loginAdmin()" class="btn">Login</button>

        </form>

    </section>





    <!-- contact section starts  -->

    <section class="contact" id="contact">

        <h1 class="heading"> <span>contact</span> us </h1>

        <form action="">

            <div class="inputBox">
                <input type="text" placeholder="name">
                <input type="email" placeholder="email">
            </div>

            <div class="inputBox">
                <input type="number" placeholder="number">
                <input type="text" placeholder="subject">
            </div>

            <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" value="send message" class="btn">

        </form>

    </section>

    <!-- contact section ends -->

    <!-- newsletter section starts  -->

    <section class="newsletter">

        <h3>subscribe us for latest updates</h3>

        <form action="">
            <input class="box" type="email" placeholder="enter your email">
            <input type="submit" value="subscribe" class="btn">
        </form>

    </section>

    <!-- newsletter section ends -->

    <!-- footer section starts  -->

    <section class="footer">

        <div class="box-container">

            <div class="box">

                <p></p>
                <div class="share">
                    <a href="#" class="btn fab fa-facebook-f"></a>
                    <a href="#" class="btn fab fa-twitter"></a>
                    <a href="#" class="btn fab fa-instagram"></a>
                    <a href="#" class="btn fab fa-linkedin"></a>
                </div>
            </div>

            <div class="box">
                <h3>our location</h3>
                <div class="links">
                    <a href="#">canada</a>
                    <a href="#">USA</a>
                    <a href="#">france</a>
                    <a href="#">japan</a>
                    <a href="#">russia</a>
                </div>
            </div>

            <div class="box">
                <h3>quick links</h3>
                <div class="links">
                    <a href="#">home</a>
                    <a href="#">category</a>
                    <a href="#">product</a>
                    <a href="#">deal</a>
                    <a href="#">contact</a>
                </div>
            </div>

            <div class="box">
                <h3>download app</h3>
                <div class="links">
                    <a href="#">google play</a>
                    <a href="#">window xp</a>
                    <a href="#">app store</a>
                </div>
            </div>

        </div>

        <h1 class="credit"> created by <span> CUTIES, </span> | all rights reserved! </h1>

    </section>

    <!-- footer section ends -->



















 

</body>
  
</template>

<script>
export default {
    name: "LoginForm",
      components:{
    
      
      
    },
     data(){
        return{
       
    }
},
    methods:{
    loginAdmin(){
            var adminInfo = [
            {
                username: "admin",
                password: "password"
            }

        ]
            var username = document.getElementById("uName").value;
            var password = document.getElementById("pass").value;

            if (username == adminInfo[0].username && password == adminInfo[0].password) {
                console.log(username + " logged in")
                window.location.href = "adminPage.html";
            }
            else {
                alert("Info wrong try again")
            }
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/styles.css';
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
     
</style>