<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div v-for="(link,index) in arr" :key="index" class="linkGroup">
        <div :class="link.isOpen ? 'active' :''" @click="openMenu(link.path,index)" class="middleItem">
          <span>{{link.name}}</span>
          <img v-if="!link.isOpen" src="./../../assets/arrowDown.png" alt="">          
          <img v-if="link.isOpen" src="./../../assets/arrowUp.png" alt="">
        </div>
        <div :class="'customMenu'+index">
          <div v-for="item in link.arr_1" :key="item.path"  class="leafItem" @click="clickLink(item.path)">
            {{item.name}}
          </div>
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

      <!-- <div class="linkGroup">
        <div :class="activeName === 'videoRecord_13' ? 'active' :''" class="middleItem" @click="clickLink('videoRecord_13')">
          <span>流行音樂</span>
        </div>
      </div>
      <div class="linkGroup">
        <div :class="activeName === 'videoRecord_14' ? 'active' :''" class="middleItem" @click="clickLink('videoRecord_14')">
          <span>跨界音樂</span>
        </div>
      </div> -->
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
          path: "",
          arr_1: [
            {
              name: "南管音樂",
              path: "videoRecord_1"
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
              name: "原住民音樂－太魯閣族、鄒族、撒奇萊雅族、雅美（達悟）族",
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
          path:'videoRecord_01',
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
        },
        {
          name:'流行音樂',
          path: 'videoRecord_02',
          arr_1:[
            {
              name: '流行音樂',
              path: 'videoRecord_13',
            },
          ],
          isOpen:false
        },
        {
          name:'跨界音樂',
          path: 'videoRecord_03',
          arr_1:[
            {
              name: '跨界音樂',
              path: 'videoRecord_14',
            }
          ],
          isOpen:false
        },
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
    openMenu(link,index){
        let dom0 = document.querySelector('.customMenu0')
        let dom1 = document.querySelector('.customMenu1')
        let dom2 = document.querySelector('.customMenu2')
        let dom3 = document.querySelector('.customMenu3')
        this.$router.push(`/videoRecord/${link}`);
        // if(link.isOpen){
        //   link.isOpen = false
        // }
      if(index === 0){
        if(this.arr[0]['isOpen']){
          this.arr[0]['isOpen'] = false
          dom0.classList.add('ex')
        }else{
          this.arr[0]['isOpen'] = !this.arr[0]['isOpen']
          this.arr[1]['isOpen'] = false
          this.arr[2]['isOpen'] = false
          this.arr[3]['isOpen'] = false
          dom0.classList.remove('ex')
          dom0.classList.toggle('show0')
          dom1.classList.remove('show1')
          dom2.classList.remove('show2')
          dom3.classList.remove('show3')
        }
      }else if(index ===1){
        // dom1.previousSibling.classList.toggle('active')
        this.arr[1]['isOpen'] = !this.arr[1]['isOpen']
        this.arr[0]['isOpen'] = false
        this.arr[2]['isOpen'] = false
        this.arr[3]['isOpen'] = false
        dom1.classList.toggle('show1')
        dom0.classList.remove('show0')
        dom2.classList.remove('show2')
        dom3.classList.remove('show3')
        dom0.classList.add('ex')
      }else if(index ===2){
        this.arr[2]['isOpen'] = !this.arr[2]['isOpen']
        this.arr[0]['isOpen'] = false
        this.arr[1]['isOpen'] = false
        this.arr[3]['isOpen'] = false
        // dom2.previousSibling.classList.toggle('active')
        dom2.classList.toggle('show2')
        dom0.classList.remove('show0')
        dom1.classList.remove('show1')
        dom3.classList.remove('show3')
        dom0.classList.add('ex')
      }else if(index ===3){
        this.arr[3]['isOpen'] = !this.arr[3]['isOpen']
        this.arr[0]['isOpen'] = false
        this.arr[2]['isOpen'] = false
        this.arr[1]['isOpen'] = false
        // dom3.previousSibling.classList.toggle('active')
        dom3.classList.toggle('show3')
        dom0.classList.remove('show0')
        dom2.classList.remove('show2')
        dom1.classList.remove('show1')
        dom0.classList.add('ex')
      }
      // link.isOpen = !link.isOpen
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrapContain{
  
//   transition:all 10s;
// }
.customMenu0,.customMenu1,.customMenu2,.customMenu3{
  height: 0;
  overflow: hidden;
  transition:height .5s;
  &.show0{
    height: 800px;
  }
  &.show1{
    height: 160px;
  }
  &.show2{
    height: 80px;
  }
  &.show3{
    height: 80px;
  }
}
.customMenu0{
  height: 800px;
  &.ex{
    height: 0;
  }
}
</style>

