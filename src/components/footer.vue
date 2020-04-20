<template>
  <section class="footer">
    <div class="footerLeft">
      <!-- <div><img class="img1" src="./../assets/footerIcon.png" alt=""></div> -->
      <div class="text">
        <!-- <p>電話：03-9705815 / 傳真：03-9605237 / 地址：26841宜蘭縣五結鄉季新村五濱路二段201號</p> -->
        <p style="display:flex;align-items:center;">
          <span>指導</span>
          <img width="100" src="./../assets/logoinit.png" alt />
        </p>
        <p style="display:flex;align-items:center;">
          <span>主辦</span>
          <img width="150" src="./../assets/centerlogo.png" alt />
          <img width="150" src="./../assets/logocolor.png" alt />
        </p>
        <!-- <p style="display:flex;align-items:center;"><span>製作</span></p> -->
        <div style="display:flex;align-items:center;">
          <span style="margin-right:5px">執行</span>
          <img width="20" src="./../assets/ai.png" alt />
          <span>&nbsp;&nbsp;中華民國國樂學會</span>
        </div>
        <p>©2019國立傳統藝術中心版權所有 All rights reserved. 建議瀏覽狀態 1280 x 800 以上.</p>
        <p><router-link :to="'/know'">著作權聲明</router-link></p>
      </div>
    </div>
    <div class="footerRight">
      <div class="text">
        <p>
          <a href="https://www.ncfta.gov.tw/taiwanmusic_74.html">臺灣音樂館</a>
        </p>
        <br />
        <p>電話 02-88669600</p>
        <br />
        <p>地址 111臺北市士林區文林路751號</p>
        <br />
        <p>
          <a href="https://www.ncfta.gov.tw/onlineobject_151_43.html">聯絡我們</a>
        </p>
        <br />
        <span id="busuanzi_container_site_uv">
          瀏覽人次 <span id="busuanzi_value_site_uv"></span>
        </span>
        <!-- <p>瀏覽人次 {{today}}</p> -->
        <!-- <p>今日訪客：{{today}} 人 &nbsp;/&nbsp; 訪客總計：{{total}} 人 &nbsp;/&nbsp; 內容更新：108-05-11</p> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      // total: "",
      // today: ""
    };
  },
  mounted() {
    // 訪客統計
    // https://sitestates.com/admin/get_code/js_text/13a82a5e8979dd19ace7ef8ad1134f24
    // this.total = document
    //   .querySelectorAll(".sitestatesJs")[0]
    //   .textContent.replace("Total:", "");
    // this.today = document
    //   .querySelectorAll(".sitestatesJs")[1]
    //   .textContent.replace("Today:", "");
    // document.querySelectorAll(".sitestatesJs").forEach(el => {
    //   el.style.display = "none";
    // });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
a {
  color: #fff;
}
.sitestatesJs {
  display: block;
  padding: 3px;
}
.footer {
  // width: 100%;
  height: 250px;
  display: flex;
  background: #000;
  padding: 30px 10rem;
  color: #fff;
  font-size: 0.8rem;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .footerLeft {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding-right: 30px;
    border-right: 1px solid #fff;
    .img1 {
      display: block;
      margin-right: 10px;
      margin-top: 12px;
    }
  }
  .footerRight {
    flex: 1;
    padding-left: 30px;
    padding-top: 10px;
  }
}
</style>
