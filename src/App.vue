<template>
  <div id='app'>
    <div class='test1'>
      <router-view />
    </div>
  </div>
</template>

<script>
import FrameUtil from './assets/frame/showAll.js'
export default {
  data() {
    return {
    }
  },
  mounted() {

    let test = document.getElementsByClassName('test1')[0];
    new FrameUtil(test, this.width, this.height);

    this.$i18n.locale = 'en-US';
    this.$router.push({
      path: '/',
      query: {
        lang: 'en-US'
      }
    })

    // setTimeout(() => {
    //   if (this.$route.query.lang === 'en-US') {
    //     this.$i18n.locale = 'en-US';
    //   } else if (this.$route.query.lang === 'cn-ZH') {
    //     this.$i18n.locale = 'cn-ZH';
    //   } else {
    //     this.$i18n.locale = 'cn-ZH';
    //     this.$router.push({
    //       path: '/',
    //       query: {
    //         lang: 'cn-ZH'
    //       }
    //     })
    //   }
    // })


  },
  methods: {
    lang() {
      if (this.$route.query.lang === 'cn-ZH') {
        this.$router.push({
          query: {
            lang: 'en-US'
          }
        });
      } else {
        this.$router.push({
          query: {
            lang: 'cn-ZH'
          }
        });
      }
      this.$i18n.locale = this.$route.query.lang;
    },
    back() {
      this.$router.push('/')
      this.$store.state.backBtn = false
    },
  }
}
</script>
<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  font-family: "huawei";
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: "huawei";
  src: url("../src/assets/font/Harmony-Regular.woff"); /* 注意路径*/
}
</style>
