<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="linkGroup">
        <div class="middleItem">傳統音樂</div>
        <div class="leafItem" v-for="item in arr_1" :key="item.path" @click="clickLink(item.path)">
          {{item.name}}
        </div>
      </div>
      <div class="linkGroup">
        <div class="middleItem">藝術（當代創作）音樂</div>
        <div class="leafItem" v-for="item in arr_2" :key="item.path" @click="clickLink(item.path)">
          {{item.name}}
        </div>
      </div>
      <div class="linkGroup">
        <div class="middleItem" @click="clickLink('videoRecord_13')">流行音樂</div>
      </div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arr_1:[
        {
          name: '南營音樂',
          path: 'videoRecord_1'
        },
        {
          name: '北營音樂',
          path: 'videoRecord_2'
        },
        {
          name: '福佬歌謠',
          path: 'videoRecord_3'
        },
        {
          name: '客家音樂',
          path: 'videoRecord_4'
        },
        {
          name: '泰雅族、賽夏族、阿美族、卑南族音樂',
          path: 'videoRecord_5'
        },
        {
          name: '邵族、鄒族、撒奇萊雅族、達悟族音樂',
          path: 'videoRecord_6'
        },
        {
          name: '排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂',
          path: 'videoRecord_7'
        },
        {
          name: '賽德克族、太魯閣族、太魯閣族、布農族、噶瑪蘭族音樂',
          path: 'videoRecord_8'
        },
        {
          name: '佛釋教音樂',
          path: 'videoRecord_9'
        },
        {
          name: '道法教音樂',
          path: 'videoRecord_10'
        }
      ],
      arr_2:[
        {
          name: '國樂',
          path: 'videoRecord_11'
        },
        {
          name: '西樂及混合編制',
          path: 'videoRecord_12'
        }
      ]
    };
  },
  methods: {
    clickLink (data) {
      this.$router.push(`/videoRecord/${data}`)
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
