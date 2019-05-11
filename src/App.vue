<template>
  <div id="app">
    <div class="wrap">
      <SearchBar></SearchBar>
      <BreadCrumb></BreadCrumb>
      <div class="headerContent"></div>
      <nav>
        <ul>
          <li><router-link :to="'/introduction'">引言</router-link></li>
          <li><router-link :to="'/idea'">編輯理念與體例說明</router-link></li>
          <li><router-link :to="'/observed'">年度活動觀察與評介</router-link></li>
          <li><router-link :to="'/comment'">文化評論</router-link></li>
          <li><router-link :to="'/videoRecord'">影音記錄</router-link></li>
          <li><router-link :to="'/indexDir'">索引名錄</router-link></li>
          <li><router-link :to="'/download'">2018臺灣音樂年鑑<br>全文下載</router-link></li>
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
import SearchBar from './components/searchBar'
import BreadCrumb from './components/breadCrumb'
import Footer from './components/footer'
export default {
  name: "App",
  components:{
    SearchBar,
    BreadCrumb,
    Footer
  },
  mounted() {
    /**
     * 解决 css 引入图片在 github pages 无法获取的问题
     */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
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
