<template>
  <section class="share">
    <img src="./../assets/twitter.png" alt="">
    <img src="./../assets/google.png" alt="">
    <img src="./../assets/facebook.png" alt="">
  </section>
</template>

<script>
export default {
  name:'Share',
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.share{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img{
    margin-right: 10px;
  }
}
</style>
