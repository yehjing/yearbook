<template>
  <section class="searchBar">
    <input class="blackBar" type="text" placeholder="搜尋">
    <div class="searchIcon">
      <img src="./../assets/search.png" alt="">
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
      position: relative;
      width: 270px;
      height: 16px;
      padding: 5px 15px;
      background: #fff;
      border: none;
      border-radius: 20px;
      overflow: hidden;
      &:focus{
        outline: none;
      }
    }
    .searchIcon{
      position: absolute;
      right: 35px;
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
