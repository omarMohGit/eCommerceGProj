<template>
  <header>
    <link rel="preconnect" href="https://fonts.gstatic.com">
   
    <div class="header-1">
      <a href="#" class="logo">
        <img src="../assets/mainlogo.jpeg" width="172" height="72"
      /></a>
      <form action="" class="search-box-container">
        <input type="search" id="search-box" placeholder="search here..." />
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </div>

    <div class="header-2">
      <div id="menu-bar" class="fas fa-bars"></div>
      <nav class="navbar">
        <a href="#home">home</a>
        <a href="#category">category</a>
        <a href="#product">product</a>
        <a href="#contact">contact</a>
        <a href="login.html">login</a>
        <a href="checkout.html">checkout</a>
      </nav>
    </div>
  </header>

  <!-- header section ends -->

  <!-- home section starts  -->

  <section class="home" id="home">
    <div class="image">
      <img src="../assets/home-img.png" alt="" />
    </div>

    <div class="content">
      <span>Spring Essential Collection is here</span>
      <h3>limited Quantities</h3>
      <a href="#" class="btn">shop now</a>
    </div>
  </section>

  <!-- home section ends -->

  <!-- apparel broll video starts-->

  <div class="hero__video">
    <video
      id="hpvid"
      src="https://player.vimeo.com/external/588444787.hd.mp4?s=90da50731af4498974fe4bea47aea1bd2ac017ac&amp;profile_id=175"
      autoplay=""
      loop=""
      muted=""
      playsinline=""
    ></video>
  </div>

  <!-- apparel broll video ends-->

  <!-- category section starts  -->

  <section class="category" id="category">
    <h1 class="heading">shop by <span>category</span></h1>

    <div class="box-container">
      <div class="box">
        <h3>Shirts</h3>
        <p>upto 50% off</p>
        <img src="" alt="" />
        <a href="#product" class="btn">shop now</a>
      </div>
      <div class="box">
        <h3>Hoodies</h3>
        <p>upto 44% off</p>
        <img src="" alt="" />
        <a href="#product" class="btn">shop now</a>
      </div>
      <div class="box">
        <h3>Pants</h3>
        <p>upto 35% off</p>
        <img src="" alt="" />
        <a href="#product" class="btn">shop now</a>
      </div>
      <div class="box">
        <h3>Shoes</h3>
        <p>upto 12% off</p>
        <img src="" alt="" />
        <a href="#product" class="btn">shop now</a>
      </div>
    </div>
  </section>

  <!-- category section ends -->

  <!-- Nike Shoe Video starts-->
  <!-- Nike Shoe Video ends-->

  <!-- product section starts  -->

  <section class="product" id="product">
    <h1 class="heading">latest <span>products</span></h1>

    <div class="box-container">
      <div class="box">
        <span class="discount">-33%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-1.jpg" alt="" />
        <h3>Smile Face Print Thermal Lined Oversized Sweatshirt</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-45%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-2.jpg" alt="" />
        <h3>Letter & Expression Print Drawstring Thermal Hoodie</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-52%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-3.jpg" alt="" />
        <h3>CARTOON GRAPHIC THERMAL PULLOVER</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-13%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-4.jpg" alt="" />
        <h3>Butterfly Letter THERMAL PULLOVER</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-20%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-5.jpg" alt="" />
        <h3>Butterfly Print Kangaroo Pocket Drawstring Thermal Hoodie</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-29%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-6.jpg" alt="" />
        <h3>Butterfly & Galaxy Print Thermal Sweatshirt</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-55%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-7.jpg" alt="" />
        <h3>Cartoon Graphic Thermal Pullover</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-30%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-8.jpg" alt="" />
        <h3>
          Chinese Dragon Graphic Kangaroo Pocket Drop Shoulder Drawstring
          Thermal Hoodie
        </h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>

      <div class="box">
        <span class="discount">-40%</span>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
        <img src="../assets/product-9.jpg" alt="" />
        <h3>
          Cartoon And Korean Letter Graphic Drawstring Thermal Lined Hoodie
        </h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">$100.50 <span> $130.20 </span></div>
        <div class="quantity">
          <span>quantity : </span>
          <input type="number" min="1" max="1000" value="1" />
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>
    </div>
  </section>
 
<!-- revuenue chart section ends -->

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

    <h1 class="credit"> created by <span> CUTIES,  </span> | all rights reserved! </h1>

</section>
</template>


<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


@import '../assets/styles/styles.css';
</style>
