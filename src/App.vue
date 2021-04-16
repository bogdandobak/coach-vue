<template>
  <the-header></the-header>
  <router-view v-slot="slotPors">
    <transition name="pages">
      <component :is="slotPors.Component">
      </component>
    </transition>
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

<style>
.pages-enter-active {
  animation: pages 0.3s ease-in;
}

.pages-enter-active {
  animation: pages 0.3s ease-out;
}

@keyframes pages {
  0% {
    opacity: 0
  } 

  50% {
    opacity: 0.5
  }

  75% {
    opacity: 0.7
  }

  100% {
    opacity: 1
  }
}
</style>