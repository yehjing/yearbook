<template>
  <div id="app">
    <div class="wrap">
      <div class="blackBar"></div>
      <div class="breadCrumb">
        <div>首頁</div>
        <div>/</div>
        <div></div>
      </div>
      <div class="headerContent"></div>
      <nav>
        <ul>
          <li><router-link :to="'/introduction'">引言</router-link></li>
          <li><router-link :to="'/idea'">編輯理念與體例說明</router-link></li>
          <li><router-link :to="'/observed'">年度活動觀察與評介</router-link></li>
          <li><router-link :to="'/comment'">文化評論</router-link></li>
          <li><router-link :to="'/videoRecord'">影音記錄</router-link></li>
          <li><router-link :to="'/indexDir'">索引名錄</router-link></li>
          <li><router-link :to="'/download'">2018臺灣音樂年鑑全文下載</router-link></li>
        </ul>
      </nav>
      <section class="mainArea">
        <div class="insideArea">
          <router-view></router-view>
        </div>
      </section>
      <div  class="footer"></div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style rel="stylesheet/scss" lang="scss">
// @import "~bootstrap/scss/bootstrap";
*{
  list-style: none;
  margin: 0 ;
  padding: 0;
}
a{
  text-decoration: none;
}
@import "./assets/styles/app.scss";
</style>
