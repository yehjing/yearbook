/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter from 'vue-router';
// intro
import Introduction from './components/introduction';
import Introduction_1 from './components/introduction/intro/intro_1';
import Introduction_2 from '@/components/introduction/intro/intro_2';
// idea
import Idea from '@/components/idea';
import Idea_1 from '@/components/idea/idea_child/idea_1';
// observed
import Observed from '@/components/observed';
import Observed_1 from '@/components/observed/observed_child/observed_1';
import Observed_2 from '@/components/observed/observed_child/observed_2';
import Observed_3 from '@/components/observed/observed_child/observed_3';
import Observed_4 from '@/components/observed/observed_child/observed_4';
import Observed_5 from '@/components/observed/observed_child/observed_5';
import Observed_6 from '@/components/observed/observed_child/observed_6';
import Observed_7 from '@/components/observed/observed_child/observed_7';
import Observed_8 from '@/components/observed/observed_child/observed_8';
import Observed_9 from '@/components/observed/observed_child/observed_9';
import Observed_10 from '@/components/observed/observed_child/observed_10';
import Observed_11 from '@/components/observed/observed_child/observed_11';
import Observed_12 from '@/components/observed/observed_child/observed_12';
import Observed_13 from '@/components/observed/observed_child/observed_13';
import Observed_14 from '@/components/observed/observed_child/observed_14';

// comment
import Comment from '@/components/comment';
import Comment_1 from '@/components/comment/comment_child/comment_1';
import Comment_2 from '@/components/comment/comment_child/comment_2';
import Comment_3 from '@/components/comment/comment_child/comment_3';
// video
import VideoRecord from '@/components/videoRecord';
import VideoRecord_1 from '@/components/videoRecord/video_child/video_1';
import VideoRecord_2 from '@/components/videoRecord/video_child/video_2';
import VideoRecord_3 from '@/components/videoRecord/video_child/video_3';
import VideoRecord_4 from '@/components/videoRecord/video_child/video_4';
import VideoRecord_5 from '@/components/videoRecord/video_child/video_5';
import VideoRecord_6 from '@/components/videoRecord/video_child/video_6';
import VideoRecord_7 from '@/components/videoRecord/video_child/video_7';
import VideoRecord_8 from '@/components/videoRecord/video_child/video_8';
import VideoRecord_9 from '@/components/videoRecord/video_child/video_9';
import VideoRecord_10 from '@/components/videoRecord/video_child/video_10';
import VideoRecord_11 from '@/components/videoRecord/video_child/video_11';
import VideoRecord_12 from '@/components/videoRecord/video_child/video_12';
import VideoRecord_13 from '@/components/videoRecord/video_child/video_13';
// indexDir
import IndexDir from '@/components/indexDir';
import IndexDir_1 from '@/components/indexDir/indexDir_child/indexDir_1';
import IndexDir_2 from '@/components/indexDir/indexDir_child/indexDir_2';
// download
import Download from '@/components/download';
import Download_1 from '@/components/download/download_child/download_1';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: '引言',
      path: '/introduction',
      component: Introduction,
      children: [
        {
          name: '傳藝中心主任序',
          path: '/',
          component: Introduction_1,
        },
        {
          name: '臺音館館主任序',
          path: 'introduction_2',
          component: Introduction_2,
        },
      ],
    },
    {
      name: '編輯理念與體例說明',
      path: '/idea',
      component: Idea,
      children: [
        {
          path: 'idea_1',
          component: Idea_1,
        },
      ],
    },
    {
      name: '年度活動觀察與評介',
      path: '/observed',
      component: Observed,
      children: [
        {
          name: '南管音樂活動觀察與評介',
          path: 'Observed_1',
          component: Observed_1,
        },
        {
          name: '北管音樂活動觀察與評介',
          path: 'Observed_2',
          component: Observed_2,
        },
        {
          name: '福佬歌謠活動觀察與評介',
          path: 'Observed_3',
          component: Observed_3,
        },
        {
          name: '客家音樂活動觀察與評介',
          path: 'Observed_4',
          component: Observed_4,
        },
        {
          name: '泰雅族、賽夏族、阿美族、卑南族音樂活動觀察與評介',
          path: 'Observed_5',
          component: Observed_5,
        },
        {
          name: '邵族、鄒族、撒奇萊雅族、達悟族音樂活動觀察與評介',
          path: 'Observed_6',
          component: Observed_6,
        },
        {
          name: '排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂活動觀察與評介',
          path: 'Observed_7',
          component: Observed_7,
        },
        {
          name: '賽德克族、太魯閣族、太魯閣族、布農族、噶瑪蘭族音樂活動觀察與評介',
          path: 'Observed_8',
          component: Observed_8,
        },
        {
          name: '佛釋教音樂活動觀察與評介',
          path: 'Observed_9',
          component: Observed_9,
        },
        {
          name: '道法教音樂活動觀察與評介',
          path: 'Observed_10',
          component: Observed_10,
        },
        {
          name: '國樂活動觀察與評介',
          path: 'Observed_11',
          component: Observed_11,
        },
        {
          name: '西樂及混合編制活動觀察與評介',
          path: 'Observed_12',
          component: Observed_12,
        },
        {
          name: '流行音樂活動觀察與評介',
          path: 'Observed_13',
          component: Observed_13,
        },
        {
          name: '跨界音樂活動觀察與評介',
          path: 'Observed_14',
          component: Observed_14,
        },
      ],
    },
    {
      name: '文化評論',
      path: '/comment',
      component: Comment,
      children: [
        {
          name: '2018年潭灣傳統音樂文化與生態論述',
          path: '/',
          component: Comment_1,
        },
        {
          name: '2018年潭灣藝術（當代創作）音樂文化與生態論述',
          path: 'comment_2',
          component: Comment_2,
        },
        {
          name: '2018年潭灣流行及跨界音樂文化與生態論述',
          path: 'comment_3',
          component: Comment_3,
        },
      ],
    },
    {
      name: '影音記錄',
      path: '/videoRecord',
      component: VideoRecord,
      children: [
        {
          name: '南營音樂',
          path: 'videoRecord_1',
          component: VideoRecord_1,
        },
        {
          name: '北營音樂',
          path: 'videoRecord_2',
          component: VideoRecord_2,
        },
        {
          name: '福佬歌謠',
          path: 'videoRecord_3',
          component: VideoRecord_3,
        },
        {
          name: '客家音樂',
          path: 'videoRecord_4',
          component: VideoRecord_4,
        },
        {
          name: '泰雅族、賽夏族、阿美族、卑南族音樂',
          path: 'videoRecord_5',
          component: VideoRecord_5,
        },
        {
          name: '邵族、鄒族、撒奇萊雅族、達悟族音樂',
          path: 'videoRecord_6',
          component: VideoRecord_6,
        },
        {
          name: '排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂',
          path: 'videoRecord_7',
          component: VideoRecord_7,
        },
        {
          name: '賽德克族、太魯閣族、太魯閣族、布農族、噶瑪蘭族音樂',
          path: 'videoRecord_8',
          component: VideoRecord_8,
        },
        {
          name: '佛釋教音樂',
          path: 'videoRecord_9',
          component: VideoRecord_9,
        },
        {
          name: '道法教音樂',
          path: 'videoRecord_10',
          component: VideoRecord_10,
        },
        {
          name: '國樂',
          path: 'videoRecord_11',
          component: VideoRecord_11,
        },
        {
          name: '西樂及混合編制',
          path: 'videoRecord_12',
          component: VideoRecord_12,
        },
        {
          name: '流行音樂',
          path: 'videoRecord_13',
          component: VideoRecord_13,
        },
      ],
    },
    {
      name: '索引名錄',
      path: '/indexDir',
      component: IndexDir,
      children: [
        {
          name: '音樂活動',
          path: 'indexDir_1',
          component: IndexDir_1,
        },
        {
          name: '團體與個人',
          path: 'indexDir_2',
          component: IndexDir_2,
        },
      ],
    },
    {
      name: '2018臺灣音樂年鑑全文下載',
      path: '/download',
      component: Download,
      children: [
        {
          path: 'download_1',
          component: Download_1,
        },
      ],
    },
  ],
});
