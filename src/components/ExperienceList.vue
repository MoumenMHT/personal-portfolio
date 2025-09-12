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

<style src='../assets/css/components/experience.css'></style>

