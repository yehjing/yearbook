<template>
  <div class="wrap">
    文化評論
    <div class="wrapContain">
      <div class="link">
        <div @click="clickLink('comment_1')">2018年潭灣傳統音樂文化與生態論述</div>
        <div @click="clickLink('comment_2')">2018年潭灣藝術（當代創作）音樂文化與生態論述</div>
        <div @click="clickLink('comment_3')">2018年潭灣流行及跨界音樂文化與生態論述</div>
      </div>
      <router-view></router-view>
    </div>
  </div>
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
