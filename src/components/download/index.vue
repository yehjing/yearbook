<template>
  <div class="wrap">
    2018臺灣音樂年鑑全文下載
    <div class="wrapContain">
      <div class="link">
        <div @click="clickLink('download_1')">download_1</div>
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
      this.$router.push(`/download/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
