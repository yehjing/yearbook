<template>
  <div>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title">
        <h2>{{ tab.name }}</h2>
        <span>{{tab.autor}}</span>
      </div>
      <hr>
      <component v-if="currentTab.name === tab.name" :is="currentTab.component"></component>
    </div>
  </div>
</template>

<script>
import ObservedPreface1 from './observed_preface1.vue';
import Observed1 from './observed_1.vue';
import Observed2 from './observed_2.vue';
import Observed3 from './observed_3.vue';
import Observed4 from './observed_4.vue';
import Observed5 from './observed_5.vue';
import Observed6 from './observed_6.vue';
import Observed7 from './observed_7.vue';
import Observed8 from './observed_8.vue';
import Observed9 from './observed_9.vue';
import Observed10 from './observed_10.vue';


const tabs = [
  {
    name: '傳統音樂',
    autor: '',
    component: ObservedPreface1,
  },
  {
    name: '2018年度南管音樂活動觀察與評介',
    autor: '林珀姬',
    component: Observed1,
  },
  {
    name: '歷程與動態：2018年度北管音樂活動觀察與評介',
    autor: '范揚坤',
    component: Observed2,
  },
  {
    name: '2018年度福佬歌謠活動觀察與評介',
    autor: '黃玲玉',
    component: Observed3,
  },
  {
    name: '2018年度客家音樂活動觀察與評介',
    autor: '許馨文',
    component: Observed4,
  },
  {
    name: '2018年度泰雅族、賽夏族、阿美族、卑南族音樂活動觀察與評介',
    autor: '呂鈺秀',
    component: Observed5,
  },
  {
    name: '2018年度太魯閣族、鄒族、撒奇萊雅族、達悟族音樂活動觀察與評介',
    autor: '錢善華',
    component: Observed6,
  },
  {
    name: '詩歌樂舞交融之美：2018年度排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂活動觀察與評介',
    autor: '周明傑',
    component: Observed7,
  },
  {
    name: '2018年度邵族、布農族、噶瑪蘭族、賽德克族音樂活動觀察與評介',
    autor: '魏心怡',
    component: Observed8,
  },
  {
    name: '2018年度佛、釋教音樂活動觀察與評介',
    autor: '蔡秉衡',
    component: Observed9,
  },
  {
    name: '2018年度道、法教音樂活動觀察與評介',
    autor: '李秀琴',
    component: Observed10,
  },
];

export default {
  data() {
    return {
      currentTab: tabs[0],
      tabs,
    };
  },
  created() {
    // this.$router.push(`observed/${this.tabs[0].name}`);
  },
  methods: {
    changeView(tab) {
      // this.$router.push({
      //   params: {
      //     name: tab.name,
      //   },
      // });
      this.currentTab = tab;
    },
  },
};
</script>
