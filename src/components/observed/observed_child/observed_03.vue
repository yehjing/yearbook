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
import ObservedPreface4 from './observed_preface4.vue';
import Observed14 from './observed_14.vue';


const tabs = [
  {
    name: '跨界音樂',
    autor: '',
    component: ObservedPreface4,
  },
  {
    name: '時空交織的絢爛迸發：2018年度跨界音樂活動觀察與評介',
    autor: '陳慧珊',
    component: Observed14,
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
