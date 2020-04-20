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
import ObservedPreface3 from './observed_preface3.vue';
import Observed13 from './observed_13.vue';


const tabs = [
  {
    name: '流行音樂',
    autor: '',
    component: ObservedPreface3,
  },
  {
    name: '2018年度流行音樂活動觀察與評介',
    autor: '徐玫玲',
    component: Observed13,
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
