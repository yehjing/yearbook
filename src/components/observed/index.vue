<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem noLeaf" :class="activeName === '' ? 'active' :''" @click="clickLink('')">
        傳統音樂
      </div>
      <div class="middleItem noLeaf" :class="activeName === 'observed_01' ? 'active' :''" @click="clickLink('observed_01')">
        藝術(當代創作)音樂
      </div>
      <div class="middleItem noLeaf" :class="activeName === 'observed_02' ? 'active' :''" @click="clickLink('observed_02')">
        流行音樂
      </div>
      <div class="middleItem noLeaf" :class="activeName === 'observed_03' ? 'active' :''" @click="clickLink('observed_03')">
        跨界音樂
      </div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from '../share.vue';

export default {
  components: {
    Share,
  },
  data() {
    return {
      activeName: '',
    };
  },
  created() {
  },
  methods: {
    clickLink(data) {
      this.activeName = data;
      this.$router.push(`/observed/${data}`);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
