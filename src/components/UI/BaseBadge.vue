<template>
  <span class="border-2 border-purple-600 p-2 rounded-md text-white text-md font-medium">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  computed: {
    title() {
      return this.text.toUpperCase();
    },
  }
}
</script>
