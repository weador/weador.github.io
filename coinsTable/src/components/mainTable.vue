<template>
  <div class="table">
    <div class="table_header header">
      <div class="header_title">Информация о 15 криптовалютах с наибольшей рыночной капитализацией</div>
      <div class="header_cols cols">
        <div class="cols_col cols_col__name">Название</div>
        <div class="cols_col cols_col__price">Стоимость $</div>
        <div class="cols_col cols_col__marketCapUsd">Рыночная капитализация</div>
        <div class="cols_col cols_col__volume">Суточный объем</div>
      </div>
    </div>
    <div class="table_body">
      <div class="wrap">
        <div class="row" :key="index" v-for="(item, index) in tableData">
          <div class="cell cell__name"><span>{{item.name}}</span></div>
          <div class="cell cell__price"><span>{{item.price}}</span></div>
          <div class="cell cell__marketCapUsd"><span>{{item.marketCapUsd}}</span></div>
          <div class="cell cell__volume"><span>{{item.volumeUsd24Hr}}</span></div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'mainTable',
  data () {
    return {
      allCoins: '',
      tableData: []
    }
  },
  mounted () {
    axios
      .get('https://api.coincap.io/v2/assets')
      .then(response => {
        let coinsId = ''
        this.allCoins = response.data
        this.allCoins.data.sort(function (a, b) {
          return (b.marketCapUsd - a.marketCapUsd)
        })
        for (let i = 0; i < 15; i++) {
          this.tableData.push({id: this.allCoins.data[i].id,
            name: this.allCoins.data[i].name,
            price: this.allCoins.data[i].priceUsd,
            marketCapUsd: Number(this.allCoins.data[i].marketCapUsd).toFixed(3),
            volumeUsd24Hr: Number(this.allCoins.data[i].volumeUsd24Hr).toFixed(3)})
          coinsId += this.allCoins.data[i].id
          if (i !== 14) {
            coinsId += ','
          }
        }
        const prices = new WebSocket('wss://ws.coincap.io/prices?assets=' + coinsId)
        prices.onmessage = (msg) => {
          let priceData = msg.data
          for (let i = 0; i < 15; i++) {
            let coinNamePos = priceData.indexOf(this.tableData[i].id + '":"')
            if (coinNamePos !== -1) {
              let startPrice = coinNamePos + (this.tableData[i].id + '":"').length
              let endPrice = priceData.indexOf('"', startPrice)
              this.tableData[i].price = priceData.substring(startPrice, endPrice)
            }
          }
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .table
    width: 90vw
    margin: 0 auto
    border: 1px solid black
    .header
      border-bottom: 1px solid black
      font-weight: bold
      &_title
        border-bottom: 1px solid black
        padding: 5px
      .cols
        display: flex
        &_col
          border-right: 1px solid black
          width: 50%
          box-sizing: border-box
          padding: 5px
          &__price
            border: none
          &__marketCapUsd
            display: none
          &__volume
            display: none
    &_body
      overflow: hidden
      height: 244px
      position: relative
      &:hover
        overflow-y: scroll
      .wrap
        position: absolute
        width: 90vw
        left: 0
        top: 0
      .row
        height: 30px
        border-bottom: 1px solid black
        display: flex
        .cell
          border-right: 1px solid black
          width: 50%
          box-sizing: border-box
          height: 100%
          line-height: 100%
          display: flex
          align-items: center
          justify-content: center
          &__price
            border: none
          &__marketCapUsd
            display: none
          &__volume
            display: none
  @media (min-width: 768px)
    .table
      .header
        .cols
          &_col
            &__price
              border-right: 1px solid black
            &__marketCapUsd
              display: block
            &__volume
              display: block
              border: none
      &_body
        .row
          .cell
            &__price
              border-right: 1px solid black
            &__marketCapUsd
              display: flex
            &__volume
              display: flex
              border: none

</style>
