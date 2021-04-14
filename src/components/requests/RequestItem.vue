<template>
  <li class="flex flex-col items-center justify-center py-10 px-24 sm:px-32 m-2 shadow rounded-md">
    <div >
      <a :href="link" class="text-purple-600 text-md hover:text-purple-300">{{ email }}</a>
      <p class="text-purple-400 text-lg font-medium p-2">{{ text }}</p>
      <base-button @click="deleteRequest">Delete</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    }
  },
  computed: {
    link() {
      return 'mailto:' + this.email;
    }
  },
  methods: {
    deleteRequest() {
      this.$store.dispatch('requests/deleteRequest', this.id);
    }
  }
}
</script>
