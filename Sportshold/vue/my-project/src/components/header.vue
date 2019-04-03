<template>
  <header class="header">
    <div class="user-panel">
      <div class="user-panel__wrap wrap">
        <nav>
          <ul class="user-panel__menu menu">
            <li class="menu__item" v-for="item of userPanelMenu"><a class="menu__link" v-bind:href="item.link"><span>{{ item.text }}</span></a></li>
          </ul>
        </nav>
        <nav class="user-panel__account-info account-info">
          <ul class="account-info__menu menu">
            <li class="user-panel__basket basket">
              <a href="#" class="menu__link">
                <span class="basket__icon"></span>
                <span>&#36</span>
                <span class="basket__price">46500</span>
                <span class="basket__amount">4</span>
                <span class="basket__text">Items</span>
              </a>
            </li>
            <li class="menu__login" v-if="!authorization"><a href="#" class="menu__link"><span>Login</span></a></li>
            <li class="menu__register" v-if="!authorization" @click="authorization = !authorization"><a href="#" class="menu__link"><span>Register</span></a></li>
            <li class="menu__exit" v-else @click="authorization = !authorization"><a href="#" class="menu__link"><span>Exit</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="site-navigation">
      <div class="site-navigation__wrap wrap">
        <div class="site-navigation__logo logo"><a href="#" class="logo__link"></a></div>
        <input type="checkbox" name="toggle" id="site-navigation__checkbox">
        <label for="site-navigation__checkbox" class="site-navigation__toggle-menu">
          <i class="fas fa-align-justify"></i>
        </label>
        <nav class="site-navigation__menu">
          <ul class="list">
            <li v-for="item of MainMenu" class="list__item" v-bind:class="{list__item_active: item.isActive}"><a v-bind:href="item.link" class="list__link"><span>{{item.text}}</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    data(){
      return {
        authorization: false,
        userPanelMenu: [
          {text: 'Support', link: '#'},
          {text: 'Delivery', link: '#'},
          {text: 'Legal', link: '#'},
          {text: 'About Us', link: '#'}
        ],
        MainMenu: [
          {text: 'Home', link: '#', isActive: true},
          {text: 'Men', link: '#', isActive: false},
          {text: 'Womem', link: '#', isActive: false},
          {text: 'Children', link: '#', isActive: false},
          {text: 'Baby', link: '#', isActive: false},
          {text: 'Our Brands', link: '#', isActive: false},
          {text: 'Sales', link: '#', isActive: false}
        ]
      }
    }
  }
</script>
<style lang="sass">
  @import "../fonts/fontawesome/css/all.css"
  .user-panel
    background-color: #482424
    color: #fff
    font-size: 13px

    &__wrap
      justify-content: space-between
      display: flex
      align-items: center
      @media all and (max-width: 768px)
        justify-content: center

    &__menu
      margin-left: -19px
      overflow: hidden

    .menu__link
      height: 50px
      padding: 0 19px
      display: flex
      align-items: center
      @media all and (max-width: 768px)
        padding: 0 16px

      &:hover
        background-color: #ff7270

    &__account-info

      .basket
        border-right: 1px solid #5b3a3a

        &__icon
          background-image: url("../images/header__basket.png")
          background-repeat: no-repeat
          height: 20px
          width: 20px
          margin-right: 13px
          margin-bottom: 3px

        &__price,
        &__amount
          margin-right: 4px

        &__amount,
        &__text
          color: #dcc5b7

  .site-navigation
    background-color: #633231
    color: #fff
    font-size: 16px

    &__wrap
      justify-content: space-between
      @medial all and (max-width: 900px)
        &:before,
        &:after
          content: ''
          width: 100%
          order: 1
    &__logo
      background-image: url("../images/logo.png")
      background-repeat: no-repeat
      width: 182px
      height: 76px
      background-position: 0 22px

      .logo__link
        display: block
        height: 100%

    &__menu
      @media all and (max-width: 900px)
        display: none

      .list
        @media all and (max-width: 900px)
          flex-direction: column
          width: 100%
      .list__item
        @media all and (max-width: 900px)
          width: 100%
          text-align: right
        &_active .list__link,
        .list__link:hover
          color: #ff7270
          border-bottom: 4px solid #ff7270
          border-top: 4px solid transparent

        &:last-of-type
          .list__link
            margin-right: 0
            padding-right: 0

      .list__link
        height: 76px
        padding: 0 9px
        margin: 0 8px
        display: flex
        align-items: center
        box-sizing: border-box
    #site-navigation__checkbox
      display: none
    &__toggle-menu
      cursor: pointer
      display: none
      @media all and (max-width: 900px)
        display: flex
        align-items: center
        margin-right: 50px
        font-size: 20px
        padding: 10px
    #site-navigation__checkbox:checked ~ &__menu
      @media all and (max-width: 900px)
        display: flex
        order: 1
        justify-content: flex-end
        width: 100%
</style>