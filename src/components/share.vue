<template>
  <section class="share">
    <img @click="shareToTwitter" src="./../assets/twitter.png" alt="">
    <img @click="shareToGoogle" src="./../assets/google.png" alt="">
    <img @click="shareToFb" src="./../assets/facebook.png" alt="">
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
    shareToFb(){
      location.href=`https://www.facebook.com/sharer/sharer.php?u=https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/`
    },
    shareToTwitter(){
      location.href=`https://twitter.com/intent/tweet?url=https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/`
    },
    shareToGoogle(){
      location.href=`https://plus.google.com/share?url=https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/`
    }
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
