<template>
    <section class="mx-5 sm:mx-14">
      <base-card class="text-center gap-2 items-center p-5">
        <div class="text-center text-purple-400 font-semibold text-xl">
          <h2>{{ fullName }}</h2>
          <h3>${{ rate }}/hour</h3>
        </div>
        <router-view></router-view>
        <div class="flex gap-1 sm:gap-5 sm:gap-10 w-2/4 justify-center">
          <base-badge
            v-for="area in areas"
            :key="area"
            :text="area"
            class="text-purple-500 w-full"
          >
          </base-badge>
        </div>
        <p class="font-medium p-5 text-purple-600">
          {{ description }}
        </p>
        <base-button link :to="contactLink">
          Contact
        </base-button>
      </base-card>
    </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      reqiured: true,
    }
  },
  data() {
    return {
      selectedCoach: null,
    }
  },
  created() {
    this.selectedCoach
      = this.$store.getters['coaches/coaches'].find(coach => (
          coach.id === this.id
        ));
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.id + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    }
  },
}
</script>
