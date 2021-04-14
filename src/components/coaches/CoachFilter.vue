<template>
  <div class="w-60 m-auto p-5">
    <label class="block text-center">
      <span class="text-purple-700 font-semibold text-lg">Find coach</span>
      <select @change="setFilter" class="form-select block w-full mt-4 text-purple-500 bg-grey-600 border-2 rounded border-purple-300">
        <option disabled selected>Select coach</option>
        <option v-for="option in options" :value="option.value" :key="option.text">{{ option.text }}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      value: '',
      options: [
        { text: 'Frontend', value: 'frontend'},
        { text: 'Backend', value: 'backend'},
        { text: 'Career', value: 'career'}
      ]
    }
  },
  methods: {
    setFilter(event) {
      this.value = event.target.value;
      this.$emit('change-filter', this.value)
    }
  }
}
</script>
