<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div style="background:#fff" class="middleItem" @click="clickLink('introduction_1')">傳藝中心主任序</div>
      <div class="middleItem" @click="clickLink('introduction_2')">臺音館管主任序</div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
    </div>
  </section>
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
</style>
