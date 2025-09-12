<template>
  <div class="nav-toggle" @click="toggleNav" :class="{ 'active': isNavVisible }">
    <ion-icon :name="isNavVisible ? 'close-outline' : 'menu-outline'" class="nav-toggle-icon"></ion-icon>
  </div>
  <transition name="view" appear enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__bounceOut">
  <div class="lateralBar d-flex flex-column flex-shrink-0 bg-dark__project" :class="{ 'nav-visible': isNavVisible }">
    <ul class="nav-custom nav nav-pills nav-flush flex-column mb-auto text-center">
      <a @mouseover="isActive4 = true" @mouseleave="isActive4 = false" :class="[{ 'animate__animated animate__flip' : isActive4 }]" href="/" class="nav-link nav-item__logo py-3 mb-3 mt-2">
        <img src="../assets/img/personalLogo.webp" alt="mdo" class="rounded-circle barIcons--tittle">
      </a>
      <li @mouseover="isActive5 = true" @mouseleave="isActive5 = false" :class="[{ 'animate__animated animate__jello' : isActive5 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('home')" :class="navActive == 'home' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="home-outline" class="barIcons"></ion-icon>
        </div>
      </li>
      <li @mouseover="isActive6 = true" @mouseleave="isActive6 = false" :class="[{ 'animate__animated animate__jello' : isActive6 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('about')" :class="navActive == 'about' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="accessibility-outline" class="barIcons"></ion-icon>
        </div>
      </li>
      <li @mouseover="isActive7 = true" @mouseleave="isActive7 = false" :class="[{ 'animate__animated animate__jello' : isActive7 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('experience')" :class="navActive == 'experience' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="briefcase-outline" class="barIcons"></ion-icon>
        </div>
      </li>
     <li @mouseover="isActive8 = true" @mouseleave="isActive8 = false" :class="[{ 'animate__animated animate__jello' : isActive8 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('projects')" :class="navActive == 'projects' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="code-outline" class="barIcons"></ion-icon>
        </div>
      </li>
      <li @mouseover="isActive9 = true" @mouseleave="isActive9 = false" :class="[{ 'animate__animated animate__jello' : isActive9 }]" class="nav-item nav-item__above">
        <div @click="scrollSection('contact')" :class="navActive == 'contact' ? 'icon-active' : ''" class="nav-link py-3">
          <ion-icon name="mail-outline" class="barIcons"></ion-icon>
        </div>
      </li>
    </ul>

    <ul class="nav nav-pills nav-flush flex-column text-center mb-4">
      <li class="nav-item nav-item__below">
        <div class="nav-link">
          <ion-icon @click="socialMedia('github')" @mouseover="isActive1 = true" @mouseleave="isActive1 = false" :class="[{ 'animate__animated animate__heartBeat' : isActive1 }, errorClass]" name="logo-github"></ion-icon>
        </div>
      </li>
      <li class="nav-item nav-item__below">
        <div class="nav-link">
          <ion-icon @click="socialMedia('linkedin')" @mouseover="isActive2 = true" @mouseleave="isActive2 = false" :class="[{ 'animate__animated animate__heartBeat' : isActive2 }, errorClass]" name="logo-linkedin"></ion-icon>
        </div>
      </li>
      <li class="nav-item nav-item__below">
        <div class="nav-link">
          <ion-icon @click="changeLangue()" @mouseover="isActive3 = true" @mouseleave="isActive3 = false" :class="[{ 'animate__animated animate__heartBeat' : isActive3 }, errorClass]" name="language-outline"></ion-icon>
        </div>
      </li>
    </ul>
  </div>
  </transition>
</template>

<script>
export default {
    name: 'LateralBar',
    data () {
      return {
        isActive1 : false,
        isActive2 : false,
        isActive3 : false,
        isActive4 : false,
        isActive5 : false,
        isActive6 : false,
        isActive7 : false,
        isActive8 : false,
        isActive9 : false,
        isNavVisible: false,
        errorClass : 'barIcons md hydrated',
        sectionsNames : {
          home : "homeMainContent",
          about : "aboutMeMainContent",
          experience : "experienceMainContent",
          projects : "ProjectsMainContent",
          contact : "contactMeMainContent"
        }
      }
    },
    props: {
      navActive: {
        type : String,
        default : 'home'
      }
    },
    methods: {
      socialMedia(element) {
        this.$emit('socialMediaClick', element);
      },
      scrollSection(element) {
        const sectionNameID = '#' + this.sectionsNames[element];
        this.$emit('scrollSection', sectionNameID);
        if (window.innerWidth <= 680) {
          this.isNavVisible = false;
        }
      },
      changeLangue(){
        const lang = this.$i18n.locale;
        if(lang == 'en'){
          this.$i18n.locale = 'fr';
        }else{
          this.$i18n.locale = 'en';
        }
      },
      toggleNav() {
        this.isNavVisible = !this.isNavVisible;
      }
    }
}
</script>

<style>
.lateralBar {
  width: 4.6rem;
  height: 100vh;
  max-width: 4.6rem;
  min-height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow-x: hidden;
  -moz-box-shadow: inset -1.5px 0px 0px rgba(255, 255, 255, 0.15);
  -webkit-box-shadow: inset -1.5px 0px 0px rgba(255, 255, 255, 0.15);
  box-shadow: inset -1.5px 0px 0px rgba(255, 255, 255, 0.15);
  transition: width 0.3s ease, transform 0.3s ease;
}

.nav-custom {
  width: 100%;
  height: 100%;
  align-items: center;
}

.nav-item__logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.barIcons--tittle {
  width: 5vh;
  height: 5vh;
}

.barIcons {
  width: 2rem;
  height: 2rem;
  color: #8D8E91;
}

.nav-item__above {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item__below {
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-active {
  padding: 0 !important;
  width: 100%;
  height: 4rem;
  background: #38393E !important;
  border-radius: 1.2vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-dark__project{
  background-color: #1B1C22;
}

li:hover {
  cursor: pointer;
}

@media (max-width: 680px) {
  .lateralBar {
    width: 100%;
    height: auto;
    max-width: 100%;
    min-height: auto;
    bottom: 0;
    top: auto;
    left: 0;
    background: rgba(27, 28, 34, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }

  .lateralBar.nav-visible {
    transform: translateY(0);
  }

  .nav-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #234196, #4a5485);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .nav-toggle:hover {
    transform: scale(1.1);
  }

  .nav-toggle.active {
    background: linear-gradient(135deg, #4a5485, #234196);
  }

  .nav-toggle-icon {
    color: white;
    font-size: 1.8rem;
  }

  .nav-custom {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 0.8rem 0;
  }

  .nav-item__logo {
    display: none;
  }

  .nav-item__above {
    width: auto;
    margin: 0;
  }

  .nav-item__below {
    width: auto;
    margin: 0 0.5rem;
    height: auto;
  }

  .barIcons {
    width: 1.5rem;
    height: 1.5rem;
  }

  .icon-active {
    height: auto;
    padding: 0.5rem !important;
    border-radius: 0.8vh !important;
  }
}
</style>
