<template>
  <header>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              >
            </div>
            <div class="ml-3 sm:ml-10 flex items-baseline space-x-2 sm:space-x-8" >
              <router-link
                to="/coaches"
                class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Coaches
              </router-link>
              <router-link
                to="/requests"
                class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                v-if="isAuthorized"
              >
                Requests
              </router-link>
              <router-link
                to="/auth"
                class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                v-if="!isAuthorized"
              >
                Login
              </router-link>
              <base-button 
                v-if="isAuthorized"
                @click="logout"
                class="w-1/3"
              >
                Logout
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/');
    }
  }
}
</script>
