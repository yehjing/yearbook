<template>
  <div class="wrap">
    編輯理念與體例說明
    <div class="wrapContain">
      <div class="link">
        <div @click="clickLink('idea_1')">idea_1</div>
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
      this.$router.push(`/idea/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
