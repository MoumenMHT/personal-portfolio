<template>
  <MainContent @actuallySection="getActualScroll($event)" />

  <LateralBar @scrollSection="ScrollToSection($event)" @socialMediaClick="socialMediaClick($event)" :navActive="activeIndex" />
</template>

<script>
import MainContent from './components/MainContent'

import LateralBar from './components/LateralBar'

export default {
  name: 'App',
  components: {
    LateralBar,
    MainContent,
  },
  data () {
    return {
      activeIndex : 'home',
      socialMedia  : {
        github : "https://github.com/MoumenMHT",
        linkedin : "https://www.linkedin.com/in/mechta-a-21598b227/",
      }
    }
  },
  methods: {
    getActualScroll(element) {
      console.log(element);
      
      this.activeIndex = element;
    },
    socialMediaClick(element){
      const avaliableSocialLink = this.socialMedia[element];
      window.open(avaliableSocialLink, '_blank').focus();
    },
    ScrollToSection(element) {
      this.$nextTick(() => {
        const containerScroll = document.querySelector(element);
        if (containerScroll) {
          containerScroll.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section ${element} not found`);
        }
      });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

#app {
  font-family: 'Righteous', cursive;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #1B1C22;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.mainContent {
  width: calc(100wh - 10rem);
  font-size: 100px;
  float: right;
}
</style>
