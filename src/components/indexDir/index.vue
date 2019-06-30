<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div v-for="(link,index) in arr" :key="index" class="linkGroup">
        <div :class="link.isOpen ? 'active' :''" @click="openMenu(link,index)" class="middleItem">
          <span >{{link.name}}</span>
          <img v-if="!link.isOpen" src="./../../assets/arrowDown.png" alt="">          
          <img v-if="link.isOpen" src="./../../assets/arrowUp.png" alt="">         
        </div>
        <div :class="'customMenu'+index">
          <div v-for="item in link.arr_1" :key="item.path"  class="leafItem" @click="clickLink(item.path)">
            {{item.name}}
          </div>
        </div>
      </div>
    </aside>
    <!-- <aside class="linkLeft">
      <div :class="activeName === '' ? 'active' :''" class="middleItem" @click="clickLink('')">音樂活動</div>
      <div :class="activeName === 'indexDir_2' ? 'active' :''" class="middleItem" @click="clickLink('indexDir_2')">團體與個人</div>
    </aside> -->
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
      activeName:'',
      arr:[
        {
          name:'團體與個人',
          path: 'indexDir',
          arr_1:[
            {
              name: '南管音樂篇',
              path: 'indexDir_12',
            },
            {
              name: '北管音樂篇',
              path: 'indexDir_13',
            },
            {
              name: '福佬歌謠篇',
              path: 'indexDir_14',
            },
            {
              name: '客家音樂篇',
              path: 'indexDir_15',
            },
            {
              name: '原住民音樂篇',
              path: 'indexDir_16',
            },
            {
              name: '佛、釋教音樂篇',
              path: 'indexDir_17',
            },
            {
              name: '道、法教音樂篇',
              path: 'indexDir_18',
            },
            {
              name: '國樂篇',
              path: 'indexDir_19',
            },
            {
              name: '西樂及混合編制篇',
              path: 'indexDir_20',
            },
            {
              name: '流行音樂篇',
              path: 'indexDir_21',
            },
            {
              name: '跨界樂團',
              path: 'indexDir_22',
            },
          ],
          isOpen:true
        },
        {
          name: '音樂活動',
          path: 'indexDir',
          arr_1:[
            {
              name: '南管音樂篇',
              path: 'indexDir_1',
            },
            {
              name: '北管音樂篇',
              path: 'indexDir_2',
            },
            {
              name: '福佬歌謠篇',
              path: 'indexDir_3',
            },
            {
              name: '客家音樂篇',
              path: 'indexDir_4',
            },
            {
              name: '原住民音樂篇',
              path: 'indexDir_5',
            },
            {
              name: '佛、釋教音樂篇',
              path: 'indexDir_6',
            },
            {
              name: '道、法教音樂篇',
              path: 'indexDir_7',
            },
            {
              name: '國樂篇',
              path: 'indexDir_8',
            },
            {
              name: '西樂及混合編制篇',
              path: 'indexDir_9',
            },
            {
              name: '流行音樂篇',
              path: 'indexDir_10',
            },
            {
              name: '綜合型藝術節',
              path: 'indexDir_11',
            }
          ],
          isOpen:false
        },
      ],
    };
  },
  methods: {
    clickLink (data) {
      this.$router.push(`/indexDir/${data}`)
    },
    openMenu(link,index){
        let dom0 = document.querySelector('.customMenu0')
        let dom1 = document.querySelector('.customMenu1')
      if(index === 0){
        if(this.arr[0]['isOpen']){
          this.arr[0]['isOpen'] = false
          dom0.classList.add('ex')
        }else{
          this.arr[0]['isOpen'] = !this.arr[0]['isOpen']
          this.arr[1]['isOpen'] = false
          dom0.classList.remove('ex')
          dom0.classList.toggle('show0')
          dom1.classList.remove('show1')
        }
      }else if(index ===1){
        this.arr[1]['isOpen'] = !this.arr[1]['isOpen']
        this.arr[0]['isOpen'] = false
        dom1.classList.toggle('show1')
        dom0.classList.remove('show0')
        dom0.classList.add('ex')
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.customMenu0,.customMenu1{
  height: 0;
  overflow: hidden;
  transition:height .5s;
  &.show0{
    height: 880px;
  }
  &.show1{
    height: 880px;
  }
}
.customMenu0{
  height: 880px;
  &.ex{
    height: 0;
  }
}
</style>
