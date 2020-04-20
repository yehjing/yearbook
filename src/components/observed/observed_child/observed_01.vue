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
import ObservedPreface2 from './observed_preface2.vue';
import Observed11 from './observed_11.vue';
import Observed12 from './observed_12.vue';


const tabs = [
  {
    name: '藝術(當代創作)音樂',
    autor: '',
    component: ObservedPreface2,
  },
  {
    name: '2018年度國樂活動觀察與評介',
    autor: '張儷瓊',
    component: Observed11,
  },
  {
    name: '2018年度西樂及混合編制活動觀察與評介',
    autor: '連憲升',
    component: Observed12,
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
