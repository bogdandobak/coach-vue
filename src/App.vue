<template>
  <the-header></the-header>
  <router-view>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('checkIsLogin');
  },
  computed: {
    isAutoLogout() {
      return this.$store.getters.isAutoLogout;
    }
  },
  watch: {
    isAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/');
      }
    }
  },
}
</script>
