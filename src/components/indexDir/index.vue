<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem" @click="clickLink('indexDir_1')">音樂活動</div>
      <div class="middleItem" @click="clickLink('indexDir_2')">團體與個人</div>
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
      this.$router.push(`/indexDir/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
