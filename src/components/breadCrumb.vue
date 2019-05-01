<template>
  <div class="breadCrumb">
    <div>
      <span>首頁 / </span>
      <span v-for="(item,index) in bread" :key="item.path">
        <router-link :to="item.path">{{item.name}}</router-link>
        <!-- {{item.name}} -->
        <span v-if="item.name && index !== bread.length - 1"> / </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'BreadCrumb',
  data() {
    return {
    }
  },
  created(){
    console.log(this.$route)
  },
  computed:{
    bread(){
      return this.$route.matched
    }
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.breadCrumb{
  width: calc(100% - 40px);
  height: 35px;
  background-color: #555454;
  display: flex;
  align-items: center;
  padding:0 20px;
  color:#fff;
  a{
    color:#fff;
    text-decoration: none;
  }
}
</style>
