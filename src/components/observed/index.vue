<template>
  <div class="wrap">
    <div class="wrapContain">
      <div class="link">
        <div>傳統音樂</div>
        <div v-for="(item, i) in arr_1" :key="i">
          <div @click="clickLink(item.path)">{{item.name}}</div>
        </div>
        <div>藝術（當代創作）音樂</div>
        <div v-for="(item, i) in arr_2" :key="i">
          <div @click="clickLink(item.path)">{{item.name}}</div>
        </div>
        <div>流行音樂</div>
        <div>
          <div @click="clickLink('observed_13')">流行音樂活動觀察與評介</div>
        </div>
        <div>跨界音樂</div>
        <div>
          <div @click="clickLink('observed_14')">跨界音樂活動觀察與評介</div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr_1:[
        {
          name: '南管音樂活動觀察與評介',
          path: 'observed_1',
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
          name: '邵族、鄒族、撒奇萊雅族、達悟族音樂活動觀察與評介',
          path: 'observed_6',
        },
        {
          name: '排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂活動觀察與評介',
          path: 'observed_7',
        },
        {
          name: '賽德克族、太魯閣族、太魯閣族、布農族、噶瑪蘭族音樂活動觀察與評介',
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
      arr_2:[
        {
          name: '國樂活動觀察與評介',
          path: 'observed_11',
        },
        {
          name: '西樂及混合編制活動觀察與評介',
          path: 'observed_12',
        }
      ]
    };
  },
  methods: {
    clickLink (data) {
      this.$router.push(`/observed/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
