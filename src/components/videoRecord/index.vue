<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div v-for="(link,index) in arr" :key="index" class="linkGroup">
        <div :class="link.isOpen ? 'active' :''" @click="openMenu(link),clickLink('xx')" class="middleItem">
          <span>{{link.name}}</span>
          <img v-if="!link.isOpen" src="./../../assets/arrowDown.png" alt="">          
          <img v-if="link.isOpen" src="./../../assets/arrowUp.png" alt="">
        </div>
        <div v-if="link.isOpen" v-for="item in link.arr_1" :key="item.path" class="leafItem" @click="clickLink(item.path)">
          {{item.name}}
        </div>
      </div>
      <!-- <div class="linkGroup">
        <div class="middleItem">
          <span>藝術(當代創作)音樂</span>
          <img src="./../../assets/arrowDown.png" alt>
        </div>
        <div
          class="leafItem"
          v-for="item in arr_2"
          :key="item.path"
          @click="clickLink(item.path)"
        >{{item.name}}</div>
      </div> -->

      <div class="linkGroup">
        <div :class="activeName === 'videoRecord_13' ? 'active' :''" class="middleItem" @click="clickLink('videoRecord_13')">
          <span>流行音樂</span>
          <!-- <img src="./../../assets/arrowDown.png" alt="">           -->
        </div>
      </div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from "./../share.vue";
export default {
  components: {
    Share
  },
  data() {
    return {
      activeName:'',
      arr: [
        {
          name: "傳統音樂",
          path: "videoRecord",
          arr_1: [
            {
              name: "南管音樂",
              path: ""
            },
            {
              name: "北管音樂",
              path: "videoRecord_2"
            },
            {
              name: "福佬歌謠",
              path: "videoRecord_3"
            },
            {
              name: "客家音樂",
              path: "videoRecord_4"
            },
            {
              name: "原住民音樂－泰雅族、賽夏族、阿美族、卑南族",
              path: "videoRecord_5"
            },
            {
              name: "邵族、鄒族、撒奇萊雅族、雅美(達悟)族音樂",
              path: "videoRecord_6"
            },
            {
              name: "原住民音樂－排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族",
              path: "videoRecord_7"
            },
            {
              name: "原住民音樂－邵族、布農族、噶瑪蘭族、賽德克族",
              path: "videoRecord_8"
            },
            {
              name: "佛、釋教音樂",
              path: "videoRecord_9"
            },
            {
              name: "道、法教音樂",
              path: "videoRecord_10"
            }
          ],
          isOpen: true
        },
        {
          name:'藝術(當代創作)音樂',
          path:'videoRecord',
          arr_1: [
            {
              name: "國樂",
              path: "videoRecord_11"
            },
            {
              name: "西樂及混合編制",
              path: "videoRecord_12"
            }
          ],
          isOpen:false
        }
      ],

      
    };
  },
  methods: {
    clickLink(data) {
      this.activeName = data
      if(data !== 'xx'){
        this.$router.push(`/videoRecord/${data}`);
      }
    },
    openMenu(link){
      link.isOpen = !link.isOpen
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// @import "./../../assets/styles/app.scss";
// }
</style>
