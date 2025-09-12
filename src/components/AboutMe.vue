<template>
  <div class="aboutMe--mainContent" id="aboutMeMainContent">
    <div class="sectionsTittle--text">
      {{ $t('aboutMe.title') }}
    </div>
    <div class="aboutMe">
      <div v-show="aboutMeText" class="aboutMeContent--text animate__animated animate__fadeIn">
        {{ $t('aboutMe.descriptionOne') }}
        <br /><br />
        {{ $t('aboutMe.descriptionTwo') }}
      </div>
     
      <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
      <img v-show="aboutMePhoto" src="../assets/img/moumen.jpg" alt="Personal Photo" class="aboutMe--image " />

    </div>
  </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
    name: 'About',
    data(){
      return {
        aboutMeText: false,
        aboutMePhoto: false
      }
    },
    components: {
      Scrollwatcher
    },
    methods: {
      scrolledOn() {
        // Add a small delay between animations
        this.aboutMeText = true;
        setTimeout(() => {
          this.aboutMePhoto = true;
        }, 500);
        this.$emit('actualActiveNav', 'about');
      }
    }
}
</script>

<style>
@import '../assets/css/components/aboutMe.css';
</style>
