<template>
  <base-card>
    <div class="flex flex-col gap-3  items-center m-5" v-show="isLoading">
        <orbit-spinner
          :animation-duration="1200"
          :size="55"
          color="#9370DB"
        />
        <p class="text-purple-500 font-semibold text-lg">Authenticaticating</p>
    </div>
    <form
      class="bg-white shadow-md rounded px-20 py-12 m-10"
      @submit.prevent="submitForm"
    >
      <div class="mb-4">
        <label
          class="block text-purple-400 text-sm font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"
          type="email"
          v-model.trim="email"
          @blur="handleValidity('email')"
        />
        <p
          v-if="errors.email"
          class="text-red-500"
        >
          Enter a valid email (email@some.com)
        </p>
      </div>
      <div class="mb-4">
        <label
          class="block text-purple-400 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password"
          type="password"
          v-model.trim="password"
          @blur="handleValidity('password')"
        />
        <p
          v-if="errors.password"
          class="text-red-500"
        >
          Password must be at least 6 characters
        </p>
      </div>
      <div class="flex justify-around gap-10">
        <base-button>{{ submitButtonText }}</base-button>
        <base-button type="button" @click="switchMode">{{ switchModeButtonText }}</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
  components: {
    OrbitSpinner,
  },
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: false,
        password: false
      },
      mode: 'login',
      isLoading: false,
    }
  },
  methods: {
    handleValidity(input) {
      this.errors[input] = false;
    },
    validateForm() {
      if (!this.email || !this.email.includes('@')) {
        this.errors.email = true;
      }

      if (this.password.length < 6) {
        this.errors.password = true;
      }
    },
    async submitForm() {
      this.validateForm();

      if (!this.email || !this.email.includes('@') || this.password.length < 6) {
          return;
        }

      const authData = {
        email: this.email,
        password: this.password,
      };

      this.isLoading = true;

      if (this.mode === 'login') {
        await this.$store.dispatch('login', authData)
      } else {
        await this.$store.dispatch('signup', authData)
      }
      
      this.isLoading = false;
      this.email = '';
      this.password = '';
      this.errors = {
        email: false,
        password: false,
      }

      this.$router.push('/coaches');
    },
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    }
  },
  computed: {
    submitButtonText() {
      return this.mode === 'login' ? 'Sign in' : 'Sign up'
    },
    switchModeButtonText() {
      return this.mode === 'login' ? 'Sign up instead' : 'Sign in instead'
    }
  }
}
</script>
