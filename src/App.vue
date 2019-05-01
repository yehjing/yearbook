<template>
  <div id="app">
    <div class="wrap">
      <div class="blackBar"></div>
      <BreadCrumb></BreadCrumb>
      <div class="headerContent"></div>
      <nav>
        <ul>
          <li><router-link :to="'/introduction'">引言</router-link></li>
          <li><router-link :to="'/idea/idea_1'">編輯理念與體例說明</router-link></li>
          <li><router-link :to="'/observed/observed_1'">年度活動觀察與評介</router-link></li>
          <li><router-link :to="'/comment'">文化評論</router-link></li>
          <li><router-link :to="'/videoRecord/videoRecord_1'">影音記錄</router-link></li>
          <li><router-link :to="'/indexDir/indexDir_1'">索引名錄</router-link></li>
          <li><router-link :to="'/download/download_1'">2018臺灣音樂年鑑全文下載</router-link></li>
        </ul>
      </nav>
      <section class="mainArea">
        <div class="insideArea">
          <router-view></router-view>
        </div>
      </section>
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script>
import Footer from './components/footer'
import BreadCrumb from './components/breadCrumb'
export default {
  name: "App",
  components:{
    BreadCrumb,
    Footer
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
// @import "~bootstrap/scss/bootstrap";
*{
  list-style: none;
  margin: 0 ;
  padding: 0;
  font-family: '微軟正黑體'
}
a{
  text-decoration: none;
}
body{
  background: linear-gradient(to bottom, #BB6400, #FF9100);
}
@import "./assets/styles/app.scss";
</style>
