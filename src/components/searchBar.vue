<template>
  <section class="searchBar">
    <div class="blackBar">

    </div>
  </section>
</template>

<script>
export default {
  name:'SearchBar',
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
.searchBar{
    // width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    height: 50px;
    background: #000;
    .blackBar{
      width: 300px;
      height: 30px;
      background: #fff;
      border-radius: 20px；
    }
  }
</style>
