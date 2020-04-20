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
// import IndexDirPreface1 from './indexDir_preface1.vue';
import IndexDir1 from './indexDir_1.vue';
import IndexDir2 from './indexDir_2.vue';
import IndexDir3 from './indexDir_3.vue';
import IndexDir4 from './indexDir_4.vue';
import IndexDir5 from './indexDir_5.vue';
import IndexDir6 from './indexDir_6.vue';
import IndexDir7 from './indexDir_7.vue';
import IndexDir8 from './indexDir_8.vue';
import IndexDir9 from './indexDir_9.vue';
import IndexDir10 from './indexDir_10.vue';
import IndexDir11 from './indexDir_11.vue';


const tabs = [
  // {
  //   name: '序',
  //   autor: '',
  //   component: IndexDirPreface1,
  // },
  {
    name: '南管音樂篇',
    autor: '',
    component: IndexDir1,
  },
  {
    name: '北管音樂篇',
    autor: '',
    component: IndexDir2,
  },
  {
    name: '福佬歌謠篇',
    autor: '',
    component: IndexDir3,
  },
  {
    name: '客家音樂篇',
    autor: '',
    component: IndexDir4,
  },
  {
    name: '原住民音樂篇',
    autor: '',
    component: IndexDir5,
  },
  {
    name: '佛、釋教音樂篇',
    autor: '',
    component: IndexDir6,
  },
  {
    name: '道、法教音樂篇',
    autor: '',
    component: IndexDir7,
  },
  {
    name: '國樂篇',
    autor: '',
    component: IndexDir8,
  },
  {
    name: '西樂及混合編制篇',
    autor: '',
    component: IndexDir9,
  },
  {
    name: '流行音樂篇',
    autor: '',
    component: IndexDir10,
  },
  {
    name: '綜合型藝術節',
    autor: '',
    component: IndexDir11,
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
