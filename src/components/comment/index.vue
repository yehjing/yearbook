<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem" @click="clickLink('comment_1')">2018年潭灣傳統音樂文化與生態論述</div>
      <div class="middleItem" @click="clickLink('comment_2')">2018年潭灣藝術（當代創作）音樂文化與生態論述</div>
      <div class="middleItem" @click="clickLink('comment_3')">2018年潭灣流行及跨界音樂文化與生態論述</div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  
  data() {
    return {
    };
  },
  methods: {
    clickLink (data) {
      this.$router.push(`/comment/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
