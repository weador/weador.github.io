<template>
  <main>
      <section class="airmax">
        <div class="airmax__wrap wrap">
          <div class="airmax__shoe shoe"><div class="shoe__img"></div></div>
          <div class="airmax__about about">
            <span class="about__price">From &#36<span>80.00</span></span>
            <h2 class="about__head-1 head-1"><span class="head-1__first-letter">N</span>ike Air Max</h2>
            <h3 class="about__head-2">50 Variants</h3>
            <p class="about__paragraph">Since this is our favorite sneaker, we’re bringing you 50 variants to suit everyone's needs.</p>
            <button class="airmax__btn btn">Browse variants</button>
          </div>
        </div>
      </section>
      <section class="best-offer">
        <div class="best-offer__wrap wrap">
          <div class="best-offer__bigcard bigcard">
            <div class="bigcard__photo">
              <div class="bigcard__wrap">
                <div class="bigcard__logo"></div>
                <div class="bigcard__about">
                  <h4 class="best-offer__heading bigcard__heading">Discover the new</h4>
                  <span class="best-offer__type bigcard__type">Nike Kyrie 3</span>
                </div>
              </div>
              <button class="bigcard__btn btn">View collection</button>
            </div>
            
          </div>
          <div class="best-offer__othercards othercards">
            <div class="othercards__mediumcard mediumcard">
              <div class="mediumcard__photo"></div>
              <div class="mediumcard__about">
                <h4 class="best-ofer__heading mediumcard__heading">Check out the</h4>
                <span class="best-offer__type mediumcard__type">New Arrivals</span>
                <button class="mediumcard__btn btn">Discover</button>
              </div>
            </div>
            <div class="othercards__small othercards__small_first">
              <div class="othercards__about_first">
                <h4 class="best-offer__heading othercards__heading_first">Best for</h4>
                <span class="best-offer__type othercards__type_first">Athletes</span>
              </div>
            </div>
            <div class="othercards__small othercards__small_second">
              <div class="othercards__about_second">
                <h4 class="best-offer__heading othercards__heading_second">Feel</h4>
                <span class="best-offer__type othercards__type_second">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pricelist">
        <div class="pricelist__wrap wrap">
          <div class="pricelist__howsort howsort" id="sort-variants">
            <span class="howsort__item" :class="{howsort__item_active: howSort.newest}" v-on:click="ActivateNew" @click="sortParam='new'">NEW</span>
            <span class="howsort__item" :class="{howsort__item_active: howSort.popular}" v-on:click="ActivatePopular" @click="sortParam='popular'">POPULAR</span>
            <span class="howsort__item" :class="{howsort__item_active: howSort.picks}" v-on:click="ActivatePicks" @click="sortParam='topPicks'">TOP PICKS</span>
          </div>
          <ul class="pricelist__list products" id="list-of-products">
            <li class="products__item product" v-for="item of sortedProducts" :class="{product_discount: item.discount}" :data-old-price="item.oldPrice" :data-percent-discount="item.percentDiscount">
              <a href="#" class="product__link">
                <div class="product__price">&#36<span>{{item.price}}</span></div>
                <img :src="item.imageUrl" alt="boot__photo" class="product__photo"></img>
                <div class="product__description">
                  <div class="product__sex">{{item.sex}}</div>
                  <div class="product__model">{{item.model}}</div>
                  <div class="product__identity">#<span>{{item.id}}</span></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
</template>
<script>
  export default {
    data(){
      return {
        sortParam: '',
        howSort: {
          newest: true,
          popular: false,
          picks: false
        },
        products: [
          {price: "45.00", imageUrl: '../images/catalog__card__1.png', sex: "MEN", model: 'Converse Breakpoint Suede Blue', id: 16378271, 
          discount: true, percentDiscount: 25, oldPrice: "60.00", data: 1, popular: 8, picks: 3},
          {price: "55.00", imageUrl: '../images/catalog__card__2.png', sex: "MEN/WOMEN", model: 'Converse CT All Star II', id: 16378271, 
          data: 2, popular: 7, picks: 4},
          {price: "60.00", imageUrl: '../images/catalog__card__3.png', sex: "WOMEN", model: 'Adidas Pure Boost Chill', id: 16378271, discount: true, percentDiscount: 25, oldPrice: "80.00", data: 3, popular: 6, picks: 2},
          {price: "50.00", imageUrl: '../images/catalog__card__4.png', sex: "MEN", model: 'Puma Duplex W Casual', id: 16378271, 
          data: 4, popular: 5, picks: 7},
          {price: "90.00", imageUrl: '../images/catalog__card__5.png', sex: "MEN", model: 'Adidas Alphabounce 1M', id: 16378271, 
          data: 5, popular: 4, picks: 11},
          {price: "50.00", imageUrl: '../images/catalog__card__6.png', sex: "MEN", model: 'Asics GEL-Epirus', id: 16378271, 
          discount: true, percentDiscount: 50, oldPrice: "100.00", data: 6, popular: 3, picks: 0},
          {price: "40.00", imageUrl: '../images/catalog__card__7.png', sex: "MEN", model: 'Adidas Originals Courtvantage Mesh', id: 16378271, 
          data: 7, popular: 2, picks: 8},
          {price: "80.00", imageUrl: '../images/catalog__card__8.png', sex: "MEN", model: 'Adidas Originals Climacool 1', id: 16378271, 
          data: 8, popular: 1, picks: 9}
        ]
      }
    },
    methods: {
      ActivateNew() {
        this.howSort.newest = true
        this.howSort.popular = false
        this.howSort.picks = false
      },
      ActivatePopular() {
        this.howSort.newest = false
        this.howSort.popular = true
        this.howSort.picks = false
      },
      ActivatePicks() {
        this.howSort.newest = false
        this.howSort.popular = false
        this.howSort.picks = true
      }
    },
    computed: {
      sortedProducts () {
          switch(this.sortParam){
              case 'new': return this.products.sort(sortByNew);
              case 'popular': return this.products.sort(sortByPopular);
              case 'topPicks': return this.products.sort(sortByPicks);
              default: return this.products;
          }
       }
    }
  }
var sortByNew = function(d1, d2){return d1.data - d2.data};
var sortByPopular = function(d1, d2){return d1.popular - d2.popular};
var sortByPicks = function(d1, d2){return d1.picks - d2.picks};
</script>
<style lang="sass">
  .airmax
    background-color: #f0efee
    @media all and (max-width: 600px)
      margin-bottom: 50px
    &__wrap
      position: relative
      @media all and (max-width: 900px)
        padding: 0
    .shoe
      width: 570px
      height: 601px
      position: relative
      @media all and (max-width: 900px)
        width: 100%
        position: relative
        padding-top: 82.62%
        height: auto
      &__img
        position: absolute
        background-image: url("../images/big__shoe.png")
        background-repeat: no-repeat
        width: 829px
        height: 685px
        right: 26px
        top: -84px
        @media all and (max-width: 900px)
          width: 100%
          height: 100%
          position: absolute
          background-size: contain
          top: 0
          left: 0
          &::before
            content: ''
            width: 100%
            height: 100%
            left: 0
            top: 0
            position: absolute
            background-color: rgba( 255, 255, 255, 0.4)
    &__about
      padding-top: 128px
      @media all and (max-width: 1200px)
        position: absolute
        right: 50px
        top: 150px
        z-index: 2
      @media all and (max-width: 900px)
        position: absolute
        right: 5px
        z-index: 2
        padding-top: 5px
      @media all and (max-width: 600px)
        top: 20px
        right: 18px
        padding-left: 10px
    .about
      &__price
        font-size: 30px
        color: #633231
      .head-1
        color: #633231
        font-size: 70px
        line-height: 0.82
        margin: 17px 0 25px
        padding: 0
        font-family: "TruenoUltBlk", sans-serif
        &::first-letter
          margin: -3px
        &__first-letter
          letter-spacing: 3px
          font-family: inherit
        @media all and (max-width: 768px)
          font-size: 45px
           margin: 14px 0 16px
      &__head-2
        color: #ff7270
        font-size: 50px
        margin: 0 0 28px
        line-height: 0.82
        font-family: "TruenoUltBlk", sans-serif
        @media all and (max-width: 768px)
          font-size: 33px
          margin: 0 0 21px
      &__paragraph
        color: #8a8784
        font-size: 16px
        margin: 0 1px 34px
        max-width: 401px
        line-height: 26px
        @media all and (max-width: 900px)
          color: #000
        @media all and (max-width: 768px)
          font-size: 11px
          margin: 0 0 24px
          max-width: 300px
    &__btn
      background-color: #ff7270
      @media all and (max-width: 768px)
        font-size: 13px
        padding: 11px 30px 12px

  .best-offer
    margin-top: 49px
    color: #fff
    &__wrap
      justify-content: space-between
      @media all and (max-width: 1200px)
        justify-content: center
    &__type
      font-size: 30px
      text-transform: uppercase
      font-family: "TruenoBd", sans-serif
      @media all and (max-width: 600px)
        font-size: 25px
    &__bigcard,
    &__othercards
      width: 540px
      height: 540px
      position: relative
    &__bigcard
      @media all and (max-width: 1200px)
        margin-bottom: 30px
      @media all and (max-width: 600px)
        width: 100%
        padding-top: 100%
        height: auto
    &__othercards
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-content: space-between
      @media all and (max-width: 600px)
        height: auto
        justify-content: center
    &__heading
      font-size: 30px
      font-weight: normal
      @media all and (max-width: 600px)
        font-size: 25px
    .bigcard
      &__photo
        position: absolute
        left: 0
        top: 0
        background-image: url("../images/Nike__Kyrie__3__card.png")
        background-repeat: no-repeat
        background-size: contain
        width: 100%
        height: 100%
        &::before
          content: ""
          position: absolute
          top: 227px
          left: -14px
          width: 29px
          height: 56px
          background-image: url("../images/Biteof__Nike__Kyrie__3__card.png")
          background-repeat: no-repeat
          @media all and (max-width: 600px)
            display: none
      &__wrap
        display: flex
        margin-top: 25px
        @media all and (max-width: 600px)
          margin-top: 10px
      &__logo
        background-image: url("../images/Nike__Kyrie__3__Logo.png")
        background-repeat: no-repeat
        width: 82px
        height: 97px
        margin-left: 25px
        margin-top: 1px
        @media all and (max-width: 600px)
          margin-left: 0
      &__about
        width: 251px
        margin-top: 12px
        margin-left: 41px
        @media all and (max-width: 600px)
          width: 251px
          margin-top: 13px
          margin-left: 0
      &__type
        color: #42d9ce
        display: block
        text-align: center
      &__btn
        background-color: #42d9ce
        color: #000
        margin-left: 165px
        margin-top: 319px
        display: block
        padding: 17px 29px 19px 30px
        @media all and (max-width: 600px)
          margin: 50% auto 0
          display: block
          font-size: 13px
          padding: 11px 30px 12px
    .mediumcard
      position: relative
      background-color: #ff7270
      z-index: 0
      width: 100%
      height: 255px
      &__photo
        background-image: url("../images/new_arrivals_card.png")
        background-repeat: no-repeat
        width: 207px
        height: 277px
        position: absolute
        left: -12px
        bottom: 0
        z-index: -1
      &__about
        margin-left: 150px
        @media all and (max-width: 600px)
          margin-left: 110px
      &__heading
        margin-top: 52px
      &__type,
      &__heading
        display: block
        text-align: center
      &__btn
        margin: 24px auto 0
        display: block
        padding: 17px 30px 19px 30px
        background-color: #633231
    .othercards
      &__medium,
      &__small
        @media all and (max-width: 600px)
          margin-bottom: 30px

      &__small
        width: 255px
        height: 255px
        &_first
          background-image: url("../images/Best__for_athletes__card.png")
          background-color: #2d2f2e
          background-repeat: no-repeat
          background-position: -67px -97px
        &_second
          background-image: url("../images/feels__premium__card.png")
          background-color: #cecece
          background-repeat: no-repeat
          background-position: center 132px
      &__heading
        &_first
          margin-top: 139px
          text-align: center
        &_second
          margin-top: 28px
          text-align: center
          color: #6b7073
          text-shadow: 0 0 30px rgba(255,255,255,0.2)
      &__type
        &_first
          display: block
          text-align: center
          color: #ff7270
        &_second
          display: block
          text-align: center
          text-shadow: 0 0 30px rgba(255,255,255,0.2)

  .pricelist
    margin-top: 91px
    .howsort
      display: flex
      flex-wrap: wrap
      justify-content: center
      color: #bdb9b4
      font-size: 30px
      width: 100%
      padding-right: 36px
      @media all and (max-width: 1200px)
        padding-right: 0
      &__item
        cursor: pointer
        &:nth-child(n+1)
          margin-left: 40px
        &_active
          font-family: "TruenoBd", sans-serif
          color: #633231
    .products
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      list-style: none
      padding: 0
      margin: 45px 0 0
      width: 100%
      @media all and (max-width: 1200px)
        justify-content: space-around
      .product
        box-sizing: border-box
        width: 255px
        height: 350px
        border: 1px solid #e0dfde
        margin-bottom: 30px
        color: #8a8784
        position: relative
        &__link
          text-decoration: none
          color: inherit
        &__price
          font-size: 24px
          margin-top: 21px
          margin-left: 28px
        &__photo
          display: block
          margin: 0 auto
        &__description
          left: 28px
          position: absolute
          bottom: 21px
          line-height: 26px
        &__sex
          font-size: 16px
          font-family: "TruenoBd", sans-serif
        &__model
          font-size: 16px
          width: 200px
          margin-bottom: 2px
        &__identity
          font-size: 14px
          color: #bdb9b5
      .product_discount
        .product__price
          color: #ff7373
        &::before
          content: "$" attr(data-old-price)
          font-size: 16px
          text-decoration: line-through
          position: absolute
          left: 28px
          top: 55px
        &::after
          content: "-" attr(data-percent-discount) "%"
          font-size: 16px
          color: #fff
          position: absolute
          right: -1px
          top: 21px
          width: 61px
          height: 24px
          padding-top: 4px
          background-color: #ff7373
          text-align: center
</style>