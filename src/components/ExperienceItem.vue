<template>
  <Scrollwatcher sentinal-name="{{ `experience-${title}` }}" @on-intersection-element="scrolledOn()" />
  <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOut">
    <div v-if="actualItem" class="container">
      <div class="timeline">
        <div class="timeline-content">
          <span class="bullet">&bull;</span>

          <h3 class="title">{{ title }}</h3>
          <h4 class="company">{{ company }}</h4>
          <time class="date">{{ date }}</time>
        </div>
      </div>
      <div class="description-section">
        <p>{{ description }}</p>
        <LinkInline v-if="link" :href="link">
          {{ $t('experience.readMore') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="chevron-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </LinkInline>
      </div>
    </div>
  </transition>
</template>

<script>
import LinkInline from './LinkInline';
import Scrollwatcher from './ScrollWatcher';

export default {
  name: 'ExperienceItem',
  components: {
    LinkInline,
    Scrollwatcher
  },
  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    date: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      actualItem: false
    }
  },
  methods: {
    scrolledOn() {
      this.actualItem = true;
    },
  },
};
</script>

<style scoped>

.container {
  position: relative;
  margin: 0 3rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  background: linear-gradient(135deg, #232429 0%, #1B1C22 100%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  padding: 2rem;
  backdrop-filter: blur(8px);
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUpExp 1.2s forwards;
}


@keyframes fadeInUpExp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline {
  position: relative;
  padding-bottom: .25rem;
  background: rgba(255,255,255,0.05);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.17);
}

.container::before {
  content: '';
  position: absolute;
  left: -35px;
  height: 100%;
  border-left: 2px solid #8D8E91;
  border-style: dashed;
}

.title {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUpExpTitle 1.4s forwards;
  animation-delay: 0.3s;
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px #ee0979, 0 1px 2px #232429;
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s infinite linear;
  margin-bottom: 1.2rem;
  margin-top: 1.5rem;
  letter-spacing: 1px;
  text-align: left;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}


@keyframes fadeInUpExpTitle {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



.bullet {
  position: absolute;
  left: -53px;
  top: 0.5rem;
  color: #ff6a00;
  text-shadow: 0 2px 8px #ee0979, 0 1px 2px #232429;
  font-size: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s infinite linear;
}


.title {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px #ee0979, 0 1px 2px #232429;
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s infinite linear;
}


.company {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px #ff6a00, 0 1px 2px #232429;
}


.date {
  font-size: 0.875rem;
  color: #ee0979;
  font-weight: 500;
}


.description-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.08);
  border-radius: 0.7rem;
  box-shadow: 0 1px 8px rgba(255,106,0,0.08);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  transition: background 0.4s;
}

.chevron-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Mobile styles */

@media (max-width: 680px) {
  .container {
    margin: 0 1.5rem;
    padding-bottom: 2rem;
    gap: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(31,38,135,0.08);
    background: rgba(255,255,255,0.08);
  }
  .container::before {
    left: -20px;
    border-left-width: 1px;
  }
  .bullet {
    left: -24px;
    top: 0.4rem;
    font-size: 1.75rem;
    color: #ff6a00;
    text-shadow: 0 2px 8px #ee0979, 0 1px 2px #232429;
    background: linear-gradient(90deg, #ff6a00, #ee0979);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientMove 3s infinite linear;
  }
  .title {
    font-size: 1.3rem;
    background: linear-gradient(90deg, #ff6a00, #ee0979);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientMove 3s infinite linear;
    text-shadow: 0 2px 8px #ee0979, 0 1px 2px #232429;
  }
  .company {
    font-size: 1rem;
    text-shadow: 0 2px 8px #ff6a00, 0 1px 2px #232429;
  }
  .date {
    font-size: 0.8rem;
    color: #ee0979;
    font-weight: 500;
  }
  .description-section {
    font-size: 0.9rem;
    background: rgba(255,255,255,0.08);
    border-radius: 0.7rem;
    box-shadow: 0 1px 8px rgba(255,106,0,0.08);
    padding: 0.7rem 1rem;
    margin-bottom: 1rem;
  }
}

/* Small mobile devices */
@media (max-width: 380px) {
  .container {
    margin: 0 1rem;
    padding-bottom: 1.5rem;
    gap: 1rem;
  }

  .container::before {
    left: -15px;
  }

  .bullet {
    left: -30px;
    top: 0.3rem;
    font-size: 1.25rem;
  }

  .title {
    font-size: 1.3rem;
  }

  .company {
    font-size: 1rem;
  }
}
</style>
