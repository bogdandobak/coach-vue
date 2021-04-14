<template>
  <section>
    <base-card class="text-center">
      <header>
        <h2 class="p-5 text-purple-600 text-lg font-semibold">
          Requests received
        </h2>
      </header>
      <div class="m-5" v-if="isLoading">
        <orbit-spinner
          :animation-duration="1200"
          :size="55"
          color="#9370DB"
        />
      </div>
      <ul v-else-if="hasRequests" class="flex flex-col items-center gap-5">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :text="request.message"
          :email="request.email"
          :id="request.id"
        >
        </request-item>
      </ul>
      <h3 v-else class="p-5 text-purple-600 text-md font-semibold">No requests</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import { OrbitSpinner } from 'epic-spinners'

export default {
  components: {
    RequestItem,
    OrbitSpinner,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return !this.isLoading && this.$store.getters['requests/hasRequests']
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;

      await this.$store.dispatch('requests/loadRequests');
      
      this.isLoading = false;
    }
  },
  created() {
    this.loadRequests();
  }
}
</script>
