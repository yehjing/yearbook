<template>
  <div class="wrap">
    引言
    <div class="wrapContain">
      <div class="link">
        <div @click="clickLink('introduction_1')">傳藝中心主任序</div>
        <div @click="clickLink('introduction_2')">臺音館管主任序</div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    clickLink(data) {
      this.$router.push(`/introduction/${data}`);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
