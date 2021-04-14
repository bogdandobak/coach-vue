<template>
  <li>
    <div class="flex justify-center items-center mb-5 mx-10">
      <div class="w-full sm:w-96 bg-gray-800 border-2 border-purple-400 p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" class="flex items-center mb-4"> 
            <div class="leading-6 ml-6">
                <h2 class="text-xl font-semibold text-white">
                  {{ fullName }}
                </h2>
                <h3 class="font-semibold text-purple-300">
                  ${{ coach.hourlyRate }}/hour
                </h3>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row justify-center gap-2 sm:gap-10">
          <base-badge 
            v-for="area in coach.areas" 
            :key="area"
            :text="area"
          >
          </base-badge>
        </div>
        <div class="flex flex-col sm:flex-row items-center sm:justify-end gap-1 sm:gap-10 mt-4">
          <base-button
            link
            :to="coachContactLink" 
          >
            Contact
          </base-button >
          <base-button
            link
            :to="coachDetailsLink" 
          >
            Details
          </base-button >
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    coach: {
      type: Object,
      required: false,
      default() {
        return null;
      }
    }
  },
  computed: {
    fullName() {
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.coach.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.coach.id;
    }
  }
}
</script>
