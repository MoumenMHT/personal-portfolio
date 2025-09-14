<template>
  <div class="Projects--mainContent" id="ProjectsMainContent">
    <div class="Projects-tittle">
      <div class="Projects--main">
        <h2 class="gradient-title">
          {{ $t('projects.title') }}
        </h2>
      </div>
    </div>
    <div class="Projects d-flex flex-column">
      <transition name="projectsLeft" enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-if="projectsLeft" class="Projects--contentLeft">
          <div class="Projects--contentLeft__main">
            <p class="Projects--contentLeft__main-text">{{ $t('projects.projects.second.title') }}</p>
            <div class="Projects--contentLeft__main-description">
              <span>
                {{ $t('projects.projects.second.description') }}
              </span>
            </div>
            <div class="Projects--contentLeft__main-social">
              <ion-icon @click="projectClick('github7akibati')" name="logo-octocat"></ion-icon>
            </div>
          </div>
          <div class="d-flex justify-content-end Projects--contentLeft__image Projects--Floowy__image">
            <img class="Projects--contentLeft__image" src="../assets/img/7a9ibatiHome.png" alt="Flowy Project Image">
          </div>
        </div>
      </transition>
      <Scrollwatcher sentinal-name="AboutMe" @on-intersection-element="scrolledOn()" />
      <transition name="projectsRight" enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOut">
        <div v-if="projectsRight" class="Projects--contentRight">
          <div class="Projects--contentRight__main">
              <p class="Projects--contentRight__main-text" style="direction: ltr;">{{ $t('projects.projects.third.title') }}</p>
              <div class="Projects--contentRight__main-description" style="direction: ltr;">
                <span>
                  {{ $t('projects.projects.third.description') }}
                </span>
              </div>
            <div class="Projects--contentRight__main-social">

              <ion-icon @click="projectClick('githubYumzo')" name="logo-octocat"></ion-icon>
            </div>
          </div>
          <div class="d-flex justify-content-end Projects--contentLeft__image Projects--Floowy__image">
            <img class="Projects--contentLeft__image" src="../assets/img/testtt-modified.png" alt="Flowy Project Image">
          </div>
          
        </div>
      </transition>
      
    </div>
  </div>
</template>

<script>

import Scrollwatcher from './ScrollWatcher';

function animateOnScroll(el, animation) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', animation);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(el);
}

export default {
  name: 'Projects',
  data() {
    return {
      projectsRight: false,
      projectsLeft: false,
      projectsLinks: {
        linkFlowy: "https://flowy-avl29z6v.b4a.run/",
        documentFlowy: "https://github.com/DavidsDvm/Flowy/blob/main/docs/Documentacion_Sistema%20de%20Gesti%C3%B3n%20de%20Ventas%20en%20la%20Industria%20Floricultora_FLOWY.docx",
        githubSlidingPuzzle: "https://github.com/MoumenMHT/Sliding-Puzzle",
        linkMediflow: "https://medisoft.onrender.com/",
        documentMediflow: "https://github.com/LuisC111/Senasoft-2021/tree/main/docs",
        github7akibati: "https://github.com/MoumenMHT/7akibati",
        linkMascotas: "https://davidsdvm.github.io/MascotasOlarte/",
        documentMascotas: "https://github.com/DavidsDvm/MascotasOlarte/blob/main/docs/Mascotas_Olarte_Planeacion_Proyecto.docx",
        githubYumzo: "https://github.com/Zisou1/Project-dev-web-avanc-e"
      }
    }
  },
  components: {
    Scrollwatcher
  },
  mounted() {
    // Animate left and right project cards on scroll
    const leftCard = this.$el.querySelector('.Projects--contentLeft');
    const rightCard = this.$el.querySelector('.Projects--contentRight');
    if (leftCard) animateOnScroll(leftCard, 'animate__fadeInLeft');
    if (rightCard) animateOnScroll(rightCard, 'animate__fadeInRight');
  },
  methods: {
    scrolledOn() {
      this.projectsRight = true;
      this.projectsLeft = true;
      this.$emit('actualActiveNav', 'projects');
      this.$nextTick(() => {
        const leftCard = this.$el.querySelector('.Projects--contentLeft');
        const rightCard = this.$el.querySelector('.Projects--contentRight');
        if (leftCard) animateOnScroll(leftCard, 'animate__fadeInLeft');
        if (rightCard) animateOnScroll(rightCard, 'animate__fadeInRight');
      });
    },
    projectClick(element) {
      const avaliableProjectLink = this.projectsLinks[element];
      window.open(avaliableProjectLink, '_blank').focus();
    }
  }
}
</script>

<style src='../assets/css/components/Projects.css'></style>
<style>
.gradient-title {
  margin: auto;
    font-size: 2.0rem;  
    font-weight: 600;
    color: rgba(255, 255, 255, 0.17)   ;
    line-height: 3rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(39, 48, 168, 0.17), 0 1px 2px rgba(31, 38, 135, 0.17   );
    background: linear-gradient(90deg, #ffffff, #727070);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientMove 3s infinite linear;
}
</style>
