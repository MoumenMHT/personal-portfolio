<template>
  <div class="mainContentContainer">
    <section id="home">
      <HomePage @actualActiveNav="aboutScroll($event)" class="mb-5"/>
    </section>

    <section id="about">
      <AboutMe @actualActiveNav="aboutScroll($event)" class="mt-5 mb-5"/>
    </section>

    <section id="experience">
      <ExperienceList @actualActiveNav="aboutScroll($event)" class="mt-5 mb-5"/>
    </section>

    <section id="projects">
      <Projects @actualActiveNav="aboutScroll($event)" class="mt-5 mb-5"/>
    </section>

    <section id="contact">
      <ContactMe @actualActiveNav="aboutScroll($event)" class="mt-5" />
    </section>

    <LanguageNotice />
  </div>
</template>


<script>
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import ExperienceList from './ExperienceList'
import LanguageNotice from './LanguageNotice'

export default {
  name: 'MainContent',
  components: {
    HomePage,
    AboutMe,
    Projects,
    ContactMe,
    ExperienceList,
    LanguageNotice
  },
  methods: {
    aboutScroll(element) {
      this.$emit('actuallySection', element);
    }
  },
  mounted() {
    document.title = 'Moumen | Web Developer | @MoumenMHT'
  }
}
</script>

<style>
.mainContentContainer {
  width: 100%;
  padding-left: 4.6rem;
}

@media (max-width: 680px) {
  .mainContentContainer {
    padding-left: 0rem;
  }
}
</style>
