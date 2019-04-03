<template>
  <div class="page-wrapper">
    <app-header> </app-header>
    <app-home> </app-home>
    <app-footer> </app-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  *
    font-family: "TruenoLt", sans-serif
  html,
  body
    margin: 0
    padding: 0

    height: 100%
  .page-wrapper
    display: flex
    flex-direction: column
    height: 100%
  main
    flex: 1 0 auto
  h1, h2, h3, h4, h5
    padding: 0
    margin: 0
  nav 
    ul
      list-style: none
      padding: 0
      margin: 0
      display: flex
  nav 
    li 
      a
        text-decoration: none
        color: inherit
        display: block
  button
    outline: none !important
    font-family: "TruenoBd", sans-serif
    padding: 17px 46px 19px 47px
    color: #fff
    font-size: 16px
    box-sizing: border-box
    border: none
    line-height: 0.8
    cursor: pointer
    text-transform: uppercase
  .wrap
    max-width: 1110px
    margin: 0 auto
    display: flex
    flex-wrap: wrap
    box-sizing: border-box
    @media all and (max-width: 1200px)
      padding: 0 10px
  @font-face
    font-family: 'TruenoLt'
    src: url('./fonts/TruenoLt/TruenoLt.eot')
    src: url('./fonts/TruenoLt/TruenoLt.eot?#iefix') format('embedded-opentype'),
    url('./fonts/TruenoLt/TruenoLt.svg#TruenoLt') format('svg'),
    url('./fonts/TruenoLt/TruenoLt.ttf') format('truetype'),
    url('./fonts/TruenoLt/TruenoLt.woff') format('woff'),
    url('./fonts/TruenoLt/TruenoLt.woff2') format('woff2')
    font-weight: normal
    font-style: normal
  @font-face 
    font-family: 'TruenoUltBlk'
    src: url('./fonts/TruenoUltBlk/TruenoUltBlk.eot')
    src: url('./fonts/TruenoUltBlk/TruenoUltBlk.eot?#iefix') format('embedded-opentype'),
    url('./fonts/TruenoUltBlk/TruenoUltBlk.svg#TruenoUltBlk') format('svg'),
    url('./fonts/TruenoUltBlk/TruenoUltBlk.ttf') format('truetype'),
    url('./fonts/TruenoUltBlk/TruenoUltBlk.woff') format('woff'),
    url('./fonts/TruenoUltBlk/TruenoUltBlk.woff2') format('woff2')
    font-weight: normal
    font-style: normal
  @font-face 
    font-family: 'TruenoBd'
    src: url('./fonts/TruenoBd/TruenoBd.eot')
    src: url('./fonts/TruenoBd/TruenoBd.eot?#iefix') format('embedded-opentype'),
    url('./fonts/TruenoBd/TruenoBd.svg#TruenoBd') format('svg'),
    url('./fonts/TruenoBd/TruenoBd.ttf') format('truetype'),
    url('./fonts/TruenoBd/TruenoBd.woff') format('woff'),
    url('./fonts/TruenoBd/TruenoBd.woff2') format('woff2')
    font-weight: normal
    font-style: normal
</style>
