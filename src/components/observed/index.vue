<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div v-for="(link,index) in arr" :key="index" class="linkGroup">
        <div :class="link.isOpen ? 'active' :''" @click="openMenu(link)" class="middleItem">
          <span >{{link.name}}</span>
          <img v-if="!link.isOpen" src="./../../assets/arrowDown.png" alt="">          
          <img v-if="link.isOpen" src="./../../assets/arrowUp.png" alt="">         
        </div>
        <div class="customMenu" :class="'leafItem'+index">
          <div v-if="link.isOpen" v-for="item in link.arr_1" :key="item.path"  class="leafItem" @click="clickLink(item.path)">
            {{item.name}}
          </div>
        </div>
      </div>
      <!-- <div class="linkGroup">
        <div @click="openMenu" class="middleItem">
          <span>藝術（當代創作）音樂</span>  
          <img v-if="!isOpen" src="./../../assets/arrowDown.png" alt="">          
          <img v-if="isOpen" src="./../../assets/arrowUp.png" alt="">            
        </div>
        <div class="leafItem" v-for="(item) in arr_2" :key="item.path" @click="clickLink(item.path)">
          {{item.name}}
        </div>
      </div>
      <div class="linkGroup">
        <div @click="openMenu" class="middleItem">
          <span>流行音樂</span>
          <img src="./../../assets/arrowDown.png" alt="">          
        </div>
        <div class="leafItem" @click="clickLink('observed_13')">流行音樂活動觀察與評介</div>
      </div>
      <div class="linkGroup">
        <div @click="openMenu" class="middleItem">
          <span>跨界音樂</span>
          <img src="./../../assets/arrowDown.png" alt="">          
        </div>
        <div class="leafItem" @click="clickLink('observed_14')">跨界音樂活動觀察與評介</div>
      </div> -->
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
    return {
      arr:[
        {
          name: '傳統音樂',
          path: 'observed',
          arr_1:[
            {
              name: '南管音樂活動觀察與評介',
              path: '',
            },
            {
              name: '北管音樂活動觀察與評介',
              path: 'observed_2',
            },
            {
              name: '福佬歌謠活動觀察與評介',
              path: 'observed_3',
            },
            {
              name: '客家音樂活動觀察與評介',
              path: 'observed_4',
            },
            {
              name: '泰雅族、賽夏族、阿美族、卑南族音樂活動觀察與評介',
              path: 'observed_5',
            },
            {
              name: '太魯閣族、鄒族、撒奇萊雅族、達悟族音樂活動觀察與評介',
              path: 'observed_6',
            },
            {
              name: '排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂活動觀察與評介',
              path: 'observed_7',
            },
            {
              name: '賽德克族、邵族、布農族、噶瑪蘭族音樂活動觀察與評介',
              path: 'observed_8',
            },
            {
              name: '佛釋教音樂活動觀察與評介',
              path: 'observed_9',
            },
            {
              name: '道法教音樂活動觀察與評介',
              path: 'observed_10',
            }
          ],
          isOpen:true
        },
        {
          name:'藝術（當代創作）音樂',
          path: 'observed',
          arr_1:[
            {
              name: '國樂活動觀察與評介',
              path: 'observed_11',
            },
            {
              name: '西樂及混合編制活動觀察與評介',
              path: 'observed_12',
            }
          ],
          isOpen:false
        },
        {
          name:'流行音樂',
          path: 'observed',
          arr_1:[
            {
              name: '流行音樂活動觀察與評介',
              path: 'observed_13',
            },
          ],
          isOpen:false
        },
        {
          name:'跨界音樂',
          path: 'observed',
          arr_1:[
            {
              name: '跨界音樂活動觀察與評介',
              path: 'observed_14',
            }
          ],
          isOpen:false
        },
      ],
      // isOpen:false
    };
  },
  methods: {
    clickLink (data) {
      this.$router.push(`/observed/${data}`)
    },
    openMenu(link){
      link.isOpen = !link.isOpen
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.customMenu{
  height: 0;
  overflow: hidden;
  transition: 1s;
  &.leafItem0{
    transition: 1s;
    height: auto;
  }
  &.leafItem1{
    transition: 1s;
    height: auto;
  }
  &.leafItem2{
    transition: 1s;
    height: auto;
  }
  &.leafItem3{
    transition: 1s;
    height: auto;
  }
}
</style>
