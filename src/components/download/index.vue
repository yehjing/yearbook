<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem" @click="clickLink('download_1')">2018臺灣音樂年鑑全文下載</div>
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
