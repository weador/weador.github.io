<template>
  <footer class="footer">
    <div class="footer__wrap wrap">
      <div class="footer__logo logo"><a class="logo__link" href="#"></a></div>
      <div class="footer__coopyrights">&#169 2017 Sportshold. All rights reserved.</div>
      <ul class="footer__socials socials">
        <li class="socials__item socials__item_tw"><a class="socials__link socials__link_tw" href="#"></a></li>
        <li class="socials__item socials__item_fb"><a class="socials__link socials__link_fb" href="#"></a></li>
        <li class="socials__item socials__item_th"><a class="socials__link socials__link_th" href="#"></a></li>
        <li class="socials__item socials__item_yt"><a class="socials__link socials__link_yt" href="#"></a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
  export default {
    data(){
      return {
      }
    }
  }
</script>
<style lang="sass">
  .footer
    flex: 0 0 auto
    background-color: #623232
    &__wrap
      display: flex
      justify-content: space-between
      align-items: center
      border-top: 1px solid #795151
      @media all and (max-width: 600px)
        justify-content: space-around
    &__logo
      background-image: url("../images/logo.png")
      background-repeat: no-repeat
      width: 182px
      height: 115px
      background-position: 0 42px
      .logo__link
        display: block
        height: 100%
    &__coopyrights
      color: #fff
      font-size: 16px
      @media all and (max-width: 600px)
        order: 3
        margin-top: 15px
    &__socials
      list-style: none
      margin: 0
      padding: 0
      width: 180px
      display: flex
      justify-content: space-between
      @media all and (max-width: 600px)
        order: 2
      .socials
        &__item
          display: inline-block
          width: 29px
          height: 27px
          background-image: url("../images/social__iocns__set.png")
          background-repeat: no-repeat
        &__item_fb
          background-position: -29px 0
        &__item_th
          background-position: -58px 0
        &__item_yt
          background-position: -87px 0
        &__link
          display: block
          height: 100%
</style>