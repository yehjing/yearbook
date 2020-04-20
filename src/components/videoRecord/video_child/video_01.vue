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
import VideoPreface2 from './video_preface2.vue';
import Video11 from './video_11.vue';
import Video12 from './video_12.vue';


const tabs = [
  {
    name: '藝術(當代創作)音樂',
    autor: '',
    component: VideoPreface2,
  },
  {
    name: '國樂',
    autor: '',
    component: Video11,
  },
  {
    name: '西樂及混合編制',
    autor: '',
    component: Video12,
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
