<template>
  <section class="searchBar">
    <div class="webMenu">
      <div @click="toggleYears = !toggleYears"  class="webYear">
        <span>歷年臺灣音樂年鑑</span>
        <span>▾</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2022)">
        <span>2022臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2021)">
        <span>2021臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2020)">
        <span>2020臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2019)">
        <span>2019臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2018)">
        <span>2018臺灣音樂年鑑</span>
      </div>
    </div>
    <!-- <input class="blackBar" type="text" placeholder="搜尋"> -->
    <div class="searchIcon">
      <img src="./../assets/search.png" alt="">
    </div>
    <gcse:search></gcse:search>
  </section>
</template>

<script>
export default {
  name:'SearchBar',
  data() {
    return {
      toggleYears: false,
    }
  },
  methods: {
    toLastYear(year) {
      document.location.href = `https://taiwanmusicyearbook.ncfta.gov.tw/${year}`;
    },
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
  .webMenu{
    display: block;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    color:#fff;
    &:hover{
      cursor: pointer;
    }
    .webYear{
      display: block;
      margin-left: 20px;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
