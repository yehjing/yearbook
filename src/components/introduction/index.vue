<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem" :class="activeName === '' ? 'active' :''" @click="clickLink('')">
        國立傳統藝術中心主任序
      </div>
      <div class="middleItem" :class="activeName === 'introduction_2' ? 'active' :''" @click="clickLink('introduction_2')">
        臺灣音樂館館主任序
      </div>
      <div class="middleItem" :class="activeName === 'introduction_3' ? 'active' :''" @click="clickLink('introduction_3')">
        主編序
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
      activeName:''
    }
  },
  created() {
  },
  methods: {
    clickLink(data) {
      this.activeName = data
      this.$router.push(`/introduction/${data}`);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
