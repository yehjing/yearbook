<template>
  <section class="footer">
    <div class="footerLeft">
      <div><img src="./../assets/footerIcon.png" alt=""></div>
      <div class="text">
        <p>電話：03-9705815 / 傳真：03-9605237 / 地址：26841宜蘭縣五結鄉季新村五濱路二段201號</p>
        <p>©2015國立傳統藝術中心版權所有 All rights reserved. 建議瀏覽狀態 1280 x 800 以上.</p>
        <p>常見問答 ｜ 政府公共網 ｜ 行政院公報 ｜ 隱私權及安全政策宣示 ｜ 政府網站資料開放宣告/著作權聲明</p>
      </div>
    </div>
    <div class="footerRight">
      <div class="text">
        <p>今日訪客：{{today}} 人 &nbsp;/&nbsp; 訪客總計：{{total}} 人 &nbsp;/&nbsp; 內容更新：108-05-11</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'Footer',
  data() {
    return {
      total:'',
      today:''
    }
  },
  mounted() {
    // 訪客統計
    // https://sitestates.com/admin/get_code/js_text/13a82a5e8979dd19ace7ef8ad1134f24
    this.total = document.querySelectorAll('.sitestatesJs')[0].textContent.replace('Total:','')
    this.today = document.querySelectorAll('.sitestatesJs')[1].textContent.replace('Today:','')
    document.querySelectorAll('.sitestatesJs').forEach(el => {
      el.style.display = 'none'
    });
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.sitestatesJs {
 	display: block;
 	padding: 3px;
}
.footer{
  // width: 100%;
  height: 126px;
  display: flex;
  background: #000;
  padding: 30px 10rem;
  color:#fff;
  font-size: .8rem;
  .text{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .footerLeft{
    display: flex;
    justify-content: flex-end;
    flex:1.4;
    padding-right:30px;
    border-right: 1px solid #fff;
    img{
      display: block;
      margin-right: 10px;
      margin-top: 12px;
    }
  }
  .footerRight{
    flex:1;
    padding-left:30px;
    padding-top: 10px;
  }
}
</style>
