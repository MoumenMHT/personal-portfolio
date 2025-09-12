<template>
  <div class="Projects--mainContent" id="experienceMainContent">
    <h2 class=" gradient-title">
      {{ $t('experience.title') }}
    </h2>
    <Scrollwatcher sentinal-name="Experience" @on-intersection-element="scrolledOn()" />
    <div class="timeline-vertical">
      <div v-for="(experience, idx) in EXPERIENCE" :key="experience.title" class="timeline-item">
        <div class="timeline-dot"></div>
        <div v-if="idx < EXPERIENCE.length - 1" class="timeline-line"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">{{ experience.title }}</h3>
          <h4 class="timeline-company">{{ experience.company }}</h4>
          <span class="timeline-date">{{ experience.date }}</span>
          <p class="timeline-description">{{ experience.description }}</p>
          <a v-if="experience.link" :href="experience.link" class="timeline-link" target="_blank">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceItem from './ExperienceItem';
import Scrollwatcher from './ScrollWatcher';

export default {
  name: 'ExperienceList',
  components: {
    ExperienceItem,
    Scrollwatcher
  },
  data() {
    return {
      EXPERIENCE: [
        {
          title: this.$t('experience.jobs.first.title'),
          date: this.$t('experience.jobs.first.date'),
          company: this.$t('experience.jobs.first.company'),
          description: this.$t('experience.jobs.first.description'),
        },
        {
          title: this.$t('experience.jobs.second.title'),
          date: this.$t('experience.jobs.second.date'),
          company: this.$t('experience.jobs.second.company'),
          description: this.$t('experience.jobs.second.description'),
          link: this.$t('experience.jobs.second.link'),

        },
        {
          title: this.$t('experience.jobs.third.title'),
          date: this.$t('experience.jobs.third.date'),
          company: this.$t('experience.jobs.third.company'),
          description: this.$t('experience.jobs.third.description'),
          link: this.$t('experience.jobs.third.link'),
        },
        {
          title: this.$t('experience.jobs.fourth.title'),
          date: this.$t('experience.jobs.fourth.date'),
          company: this.$t('experience.jobs.fourth.company'),
          description: this.$t('experience.jobs.fourth.description'),
        },
        
      ],
    };
  },
  methods: {
    scrolledOn() {
      this.$emit('actualActiveNav', 'experience');
    },
  },
  watch: {
    // check if language has changed to update the experience list
    '$i18n.locale': function () {
      this.EXPERIENCE = [
        {
          title: this.$t('experience.jobs.first.title'),
          date: this.$t('experience.jobs.first.date'),
          company: this.$t('experience.jobs.first.company'),
          description: this.$t('experience.jobs.first.description'),
          link: this.$t('experience.jobs.first.link'),
        },
        {
          title: this.$t('experience.jobs.second.title'),
          date: this.$t('experience.jobs.second.date'),
          company: this.$t('experience.jobs.second.company'),
          description: this.$t('experience.jobs.second.description'),
        },
        {
          title: this.$t('experience.jobs.third.title'),
          date: this.$t('experience.jobs.third.date'),
          company: this.$t('experience.jobs.third.company'),
          description: this.$t('experience.jobs.third.description'),
        },
        {
          title: this.$t('experience.jobs.fourth.title'),
          date: this.$t('experience.jobs.fourth.date'),
          company: this.$t('experience.jobs.fourth.company'),
          description: this.$t('experience.jobs.fourth.description'),
        }
        
      ];
    },
  },
};
</script>

<style scoped>


.timeline-vertical {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 2rem;
  margin-left: 2.5rem;
}
.timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}
.timeline-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(90deg, #234196, #4a5485);
  box-shadow: 0 2px 8px #232e4d, 0 1px 2px #232429;
  position: absolute;
  left: -2.1rem;
  top: 0.5rem;
  z-index: 2;
}
.timeline-line {
  position: absolute;
  left: -1.5rem;
  top: 2.2rem;
  width: 2px;
  height: calc(100% - 2.2rem);
  background: white ;
  opacity: 0.5;
  z-index: 1;
}
.timeline-content {
  background: linear-gradient(135deg, #232e4d 0%, #232429 100%);
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px 0 #1f26875e;
  padding: 2.5rem 2.5rem;
  min-width: 420px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
.timeline-title {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
  background: none;
  letter-spacing: 1px;
}
.timeline-company {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.3rem;
}
.timeline-date {
  font-size: 1rem;
  color: #6c7a89;
  font-weight: 500;
  margin-bottom: 1rem;
}
.timeline-description {
  color: #fff;
  font-size: 1.1rem;
  background: rgba(44, 48, 58, 0.18);
  border-radius: 0.7rem;
  box-shadow: 0 1px 8px rgba(44,48,58,0.12);
  padding: 1.2rem 2rem;
  margin-bottom: 1rem;
}
.timeline-link {
  color: #ffffff;
  font-weight: 600;
  text-decoration: underline;
  margin-top: auto;
  align-self: flex-end;
  transition: color 0.2s;
}
.timeline-link:hover {
  color: #ee0979;
}

@media (max-width: 680px) {
  .timeline-vertical {
    margin-left: 1rem;
  }
  .timeline-content {
    min-width: 0;
    max-width: 100%;
    padding: 1rem;
    border-radius: 1rem;
  }
  .timeline-title {
    font-size: 1.2rem;
  }
  .timeline-company {
    font-size: 1rem;
  }
  .timeline-date {
    font-size: 0.9rem;
  }
  .timeline-description {
    font-size: 0.95rem;
    padding: 0.7rem 1rem;
  }
  .timeline-dot {
    width: 16px;
    height: 16px;
    left: -1.2rem;
    top: 0.5rem;
  }
  .timeline-line {
    left: -0.5rem;
    width: 1px;
  }
}

.gradient-title {
    font-size: 2.2rem;  
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
