<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem" :class="activeName === '' ? 'active' :''"  @click="clickLink('')">2018年度臺灣傳統音樂文化與生態論述</div>
      <div class="middleItem" :class="activeName === 'comment_2' ? 'active' :''"  @click="clickLink('comment_2')">2018年度臺灣藝術(當代創作)音樂文化與生態論述</div>
      <div class="middleItem" :class="activeName === 'comment_3' ? 'active' :''"  @click="clickLink('comment_3')">2018年度臺灣流行及跨界音樂文化與生態論述</div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from './../share.vue';
export default {
  components:{
    Share
  },
  data() {
    return {
      activeName:''
    };
  },
  methods: {
    clickLink (data) {
      this.activeName = data
      this.$router.push(`/comment/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.middleItem{
  font-size: .9rem !important;
}
</style>
