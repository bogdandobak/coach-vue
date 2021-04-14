<template>
  <button 
    v-if="!link"
    class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
  >
    <slot></slot>
  </button>
  <router-link 
    v-else 
    :to="to" 
    class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-24 text-center"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    }
  }
}
</script>
