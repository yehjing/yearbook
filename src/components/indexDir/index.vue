<template>
  <div class="wrap">
    索引名錄
    <div class="wrapContain">
      <div class="link">
        <div @click="clickLink('indexDir_1')">音樂活動</div>
        <div @click="clickLink('indexDir_2')">團體與個人</div>
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
