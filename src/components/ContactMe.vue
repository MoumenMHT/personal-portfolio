<template>
  <div class="contactMe--mainContent" id="contactMeMainContent">
    <div class="sectionsTittle--text gradient-title" 
         :class="{ 'animate__animated animate__headShake': isTitleHovered }"
         @mouseover="isTitleHovered = true"
         @mouseleave="isTitleHovered = false">
      {{ $t('contactMe.title') }}
    </div>
    <Scrollwatcher sentinal-name="ContactMe" @on-intersection-element="scrolledOn()" />
    <transition name="contact" 
                enter-active-class="animate__animated animate__fadeInUp" 
                leave-active-class="animate__animated animate__fadeOutDown">
      <div v-if="isContactMeActive" class="contactMe">
        <div class="contactMe--main">
          <div class="text-white contactMe--main__bigText">
            <div class="text-content_container main-text-wrapper">
              <span v-for="(char, index) in bigtextOne" :key="'one-' + index"
                    @mouseover="setActive('one', index)"
                    @mouseleave="setInactive('one', index)"
                    :class="[{ 'animate__animated animate__headShake': activeChars.get('one')[index] }]"
                    class="char-animate">
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
              <span v-for="(char, index) in bigtextTwo" :key="'two-' + index"
                    @mouseover="setActive('two', index)"
                    @mouseleave="setInactive('two', index)"
                    :class="[{ 'animate__animated animate__headShake': activeChars.get('two')[index], 'highlight-text': true }]"
                    class="char-animate">
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="contact-cards">
          <div v-for="(method, index) in contactMethods" 
               :key="index" 
               class="contact-card"
               :class="{ 'animate__animated animate__pulse': hoveredCard === index }"
               @mouseover="hoveredCard = index"
               @mouseleave="hoveredCard = -1"
               @click="handleContact(method.action)">
            <ion-icon :name="method.icon"></ion-icon>
            <h3>{{ method.title }}</h3>
            <p>{{ method.description }}</p>
          </div>
        </div>

        <div class="contactMe--descriptionText"
             :class="{ 'animate__animated animate__pulse': isDescriptionHovered }"
             @mouseover="isDescriptionHovered = true"
             @mouseleave="isDescriptionHovered = false">
          {{ $t('contactMe.description') }}
        </div>

        <div class="social-links">
          <a v-for="(social, index) in socials" 
             :key="index"
             :href="social.link"
             target="_blank"
             :class="{ 'animate__animated animate__headShake': hoveredSocial === index }"
             @mouseover="hoveredSocial = index"
             @mouseleave="hoveredSocial = -1">
            <ion-icon :name="social.icon"></ion-icon>
          </a>
        </div>

        <div class="contactMe--disclamer">
          <span>{{ $t('contactMe.disclaimer') }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Scrollwatcher from './ScrollWatcher';

export default {
    name: 'ContactMe',
    data() {
      return {
        isContactMeActive: false,
        isTitleHovered: false,
        isDescriptionHovered: false,
        hoveredCard: -1,
        hoveredSocial: -1,
        activeChars: new Map([
          ['one', new Array(50).fill(false)],
          ['two', new Array(50).fill(false)]
        ]),
        contactMethods: [
          {
            icon: 'mail-outline',
            title: 'Email',
            description: this.$t('contactMe.emailDesc'),
            action: 'email'
          },
          {
            icon: 'logo-linkedin',
            title: 'LinkedIn',
            description: this.$t('contactMe.linkedinDesc'),
            action: 'linkedin'
          },
          {
            icon: 'logo-github',
            title: 'GitHub',
            description: this.$t('contactMe.githubDesc'),
            action: 'github'
          }
          
        ],
        
      }
    },
    components: {
      Scrollwatcher
    },
    computed: {
      bigtextOne() {
        return this.$t('contactMe.bigtextOne')
      },
      bigtextTwo() {
        return this.$t('contactMe.bigtextTwo')
      }
    },
    methods: {
      scrolledOn() {
        this.isContactMeActive = true;
        this.$emit('actualActiveNav', 'contact');
      },
      handleContact(action) {
        switch(action) {
          case 'email':
            window.location.href = "mailto:moumenabdou482@gmail.com?subject=Hello, I'd like to connect";
            break;
          case 'linkedin':
            window.open('https://www.linkedin.com/in/mechta-a-21598b227/', '_blank');
            break;
          case 'github':
            window.open('https://github.com/MoumenMHT', '_blank');
            break;
          
        }
      },
      setActive(section, index) {
        this.activeChars.get(section)[index] = true;
        this.activeChars = new Map(this.activeChars);
      },
      setInactive(section, index) {
        this.activeChars.get(section)[index] = false;
        this.activeChars = new Map(this.activeChars);
      }
    }
}
</script>

<style>
.contactMe--mainContent {
  margin: 0 auto;
  padding-top: 2em;
  width: 80%;
  min-height: 100vh;
  position: relative;
}

.contactMe {
  height: auto;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  background: linear-gradient(135deg, #232429 0%, #1B1C22 100%);
  border-radius: 1rem;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.main-text-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.contactMe--main__bigText {
  width: 100%;
  font-size: 4vw;
  text-align: center;
  margin-bottom: 2rem;
}

.char-animate {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.char-animate:hover {
  transform: translateY(-5px);
  color: #4a9eff;
}

.highlight-text {
  color: #4a9eff;
  text-shadow: 0 0 15px rgba(74, 158, 255, 0.5);
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.contact-card ion-icon {
  font-size: 2.5rem;
  color: #4a9eff;
  margin-bottom: 1rem;
}

.contact-card h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.contact-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.contactMe--descriptionText {
  width: 90%;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.social-links a {
  color: #fff;
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #4a9eff;
  transform: translateY(-3px);
}

.contactMe--disclamer {
  color: #8D8E91;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .contactMe--mainContent {
    width: 95%;
    margin-bottom: 4rem;
  }

  .contactMe {
    padding: 2rem 1.5rem;
    gap: 2rem;
  }

  .contactMe--main__bigText {
    font-size: 2.2rem;
    text-align: center;
  }

  .main-text-wrapper {
    justify-content: center;
    gap: 0.5rem;
  }

  .contact-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem;
  }

  .contact-card {
    padding: 1.8rem;
    transform: none;
  }

  .contact-card:hover {
    transform: translateY(-5px);
  }

  .contact-card ion-icon {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  .contact-card h3 {
    font-size: 1.3rem;
  }

  .contact-card p {
    font-size: 1rem;
  }

  .contactMe--descriptionText {
    font-size: 1.1rem;
    width: 100%;
    padding: 0 1rem;
    line-height: 1.6;
  }

  .social-links {
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .social-links a {
    font-size: 1.8rem;
  }

  .contactMe--disclamer {
    margin-top: 1.5rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .contactMe--mainContent {
    width: 100%;
    padding: 1rem;
  }

  .contactMe {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
    border-radius: 0.8rem;
  }

  .contactMe--main__bigText {
    font-size: 1.8rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-card ion-icon {
    font-size: 2rem;
  }

  .contact-card h3 {
    font-size: 1.2rem;
  }

  .contact-card p {
    font-size: 0.95rem;
  }

  .contactMe--descriptionText {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  .social-links {
    gap: 1.5rem;
  }

  .social-links a {
    font-size: 1.6rem;
  }
}

@media (max-width: 380px) {
  .contactMe--main__bigText {
    font-size: 1.6rem;
  }

  .contact-card {
    padding: 1.2rem;
  }

  .contact-card ion-icon {
    font-size: 1.8rem;
  }

  .contact-card h3 {
    font-size: 1.1rem;
  }

  .contact-card p {
    font-size: 0.9rem;
  }

  .contactMe--descriptionText {
    font-size: 0.95rem;
  }

  .social-links a {
    font-size: 1.5rem;
  }

  .contactMe--disclamer {
    font-size: 0.8rem;
  }
}

/* Animation keyframes for gradient title */
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-title {
    font-size: 3.0rem;
    width: 66%;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.17)   ;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(39, 48, 168, 0.17), 0 1px 2px rgba(31, 38, 135, 0.17   );
    background: linear-gradient(90deg, #ffffff, #727070);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientMove 3s infinite linear;
}
</style>
