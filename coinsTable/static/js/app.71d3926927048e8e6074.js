webpackJsonp([1],{NHnr:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s("7+uW"),l=s("mtWM"),i={name:"mainTable",data:function(){return{allCoins:"",tableData:[]}},mounted:function(){var a=this;l.get("https://api.coincap.io/v2/assets").then(function(t){var s="";a.allCoins=t.data,a.allCoins.data.sort(function(a,t){return t.marketCapUsd-a.marketCapUsd});for(var e=0;e<15;e++)a.tableData.push({id:a.allCoins.data[e].id,name:a.allCoins.data[e].name,price:a.allCoins.data[e].priceUsd,marketCapUsd:Number(a.allCoins.data[e].marketCapUsd).toFixed(3),volumeUsd24Hr:Number(a.allCoins.data[e].volumeUsd24Hr).toFixed(3)}),s+=a.allCoins.data[e].id,14!==e&&(s+=",");new WebSocket("wss://ws.coincap.io/prices?assets="+s).onmessage=function(t){for(var s=t.data,e=0;e<15;e++){var l=s.indexOf(a.tableData[e].id+'":"');if(-1!==l){var i=l+(a.tableData[e].id+'":"').length,n=s.indexOf('"',i);a.tableData[e].price=s.substring(i,n)}}}})}},n={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"table"},[a._m(0),a._v(" "),s("div",{staticClass:"table_body"},[s("div",{staticClass:"wrap"},a._l(a.tableData,function(t,e){return s("div",{key:e,staticClass:"row"},[s("div",{staticClass:"cell cell__name"},[s("span",[a._v(a._s(t.name))])]),a._v(" "),s("div",{staticClass:"cell cell__price"},[s("span",[a._v(a._s(t.price))])]),a._v(" "),s("div",{staticClass:"cell cell__marketCapUsd"},[s("span",[a._v(a._s(t.marketCapUsd))])]),a._v(" "),s("div",{staticClass:"cell cell__volume"},[s("span",[a._v(a._s(t.volumeUsd24Hr))])])])}),0)])])},staticRenderFns:[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"table_header header"},[s("div",{staticClass:"header_title"},[a._v("Информация о 15 криптовалютах с наибольшей рыночной капитализацией")]),a._v(" "),s("div",{staticClass:"header_cols cols"},[s("div",{staticClass:"cols_col cols_col__name"},[a._v("Название")]),a._v(" "),s("div",{staticClass:"cols_col cols_col__price"},[a._v("Стоимость $")]),a._v(" "),s("div",{staticClass:"cols_col cols_col__marketCapUsd"},[a._v("Рыночная капитализация")]),a._v(" "),s("div",{staticClass:"cols_col cols_col__volume"},[a._v("Суточный объем")])])])}]};var c={name:"App",components:{mainTable:s("VU/8")(i,n,!1,function(a){s("OLc0")},"data-v-0bdc10e5",null).exports}},o={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("mainTable")],1)},staticRenderFns:[]};var r=s("VU/8")(c,o,!1,function(a){s("kHdF")},null,null).exports;e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:r},template:"<App/>"})},OLc0:function(a,t){},kHdF:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.71d3926927048e8e6074.js.map