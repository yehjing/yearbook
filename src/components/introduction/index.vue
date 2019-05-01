<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem active" @click="clickLink('')">
        傳藝中心主任序
      </div>
      <div class="middleItem" @click="clickLink('introduction_2')">
        臺音館館主任序
      </div>
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
    return{
      }
  },
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
