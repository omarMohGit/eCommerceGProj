<template>

<body>

    <div class="header-2">
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
            <a href="/">Return Back to Homepage</a>
        </nav>
    </div>
    <div class="ty">
        <h1>Thank you for your order</h1>
        <h1>Shipping Soon</h1>
    </div>
    <img src="../assets/smiley.png" alt="Show/Hide Image" id="smiley" />
    <button type="button" id="hide">Click me</button>


    <div id="delivery">
        <img src="../assets/Sanic.webp" >
        
    </div>
    <img class="rod" src="../assets/road.webp">
    



  
</body>
  
</template>

<script>
    import $ from "jquery";

   export default{
       name: 'ConfirmView',
       mounted(){
            $(document).ready(function () {
            $('#hide').on("click", function () {
                $('#smiley').toggle('slow');
            });
        });

       }
   }
</script>
<style scoped src="../assets/styles/checkout.css">

</style>

