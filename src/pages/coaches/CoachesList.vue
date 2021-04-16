<template>
  <section class="mx-5 sm:mx-14">
    <base-card>
    <coach-filter @change-filter="setFilters"></coach-filter>
    <div class="flex flex-col sm:flex-row items-center justify-around my-4 gap-5 w-2/3 m-auto">
      <base-button @click="loadCoaches">
        Refresh
      </base-button>
      <base-button link to="/register" v-if="isVisibleButton">
        Register
      </base-button>
    </div>
    <div class="m-5" v-if="isLoading">
      <orbit-spinner
        :animation-duration="1200"
        :size="55"
        color="#9370DB"
      />
    </div>
    <ul v-else-if="hasCoaches">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :coach="coach"
      ></coach-item>
    </ul>
    <h3 v-else class="text-purple-500 font-semibold text-xl">No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import { OrbitSpinner } from 'epic-spinners'

export default {
  components: {
    CoachItem,
    CoachFilter,
    OrbitSpinner,
  },
  data() {
    return {
      filterValue: '',
      isLoading: false,
    }
  },
  computed: {
    filteredCoaches() {
      return !this.filterValue ? this.$store.getters['coaches/coaches'] : this.$store.getters['coaches/coaches'].filter(coach => coach.areas.includes(this.filterValue));
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    },
    isVisibleButton() {
      return this.isAuthorized && !this.isCoach && !this.isLoading;
    },
  },
  methods: {
    setFilters(filterValue) {
      this.filterValue = filterValue;
    },
    async loadCoaches() {
      this.isLoading = true;

      await this.$store.dispatch('coaches/loadCoaches');
      
      this.isLoading = false;
    },
  },
  created() {
    this.loadCoaches();
  }
}
</script>
