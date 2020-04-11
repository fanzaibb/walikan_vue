<template>
  <div class="row" style="height: 100%;">
    <div class="cat col-5 pl-5 mt-4">
      <img 
        class="cat-img" 
        src="IMG_0333.png" 
        alt="pic"
      >
    </div>
    <form 
      @submit.prevent.stop="handleSubmit" class="form-signin mt-4 mb-0 col-12 col-lg-7" action="/signin" 
      method="POST"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3">
          Sign In
        </h1>
      </div>
      <div class="form-label-group row">
        <label 
          for="inputEmail" 
          class="col-12 col-sm-3 h5"
        >
          Email
        </label>
        <input 
          v-model="email" 
          type="text" 
          name="email" 
          class="col-12 col-sm-6 form-control bg-transparent" 
          required 
          autofocus
        >
      </div>
      <div class="form-label-group row">
        <label 
          for="inputPassword" 
          class="col-12 col-sm-3 h5"
        >
          Password
        </label>
        <input 
          v-model="password" 
          type="password" 
          name="password"  
          class="col-12 col-sm-6 form-control bg-transparent" 
          required
        >
      </div>
      <br/>
      <div class='form-label-group btn-big-group'>
        <button 
          class="btn btn-secondary btn-block" 
          type="submit"
          :disabled="isProcessing"
        >
          Log In
        </button>
        <router-link 
          to="/auth/google" 
          class="btn btn-danger btn-block"
        >
          Login via Google
        </router-link>
        <router-link 
          to="/auth/facebook" 
          class="btn btn-primary btn-block"
        >
          Login via Facebook
        </router-link>
      </div>
      <div class="text-center mb-4 mt-3">
        <p><router-link to="/signup">Create a new account!</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */ 
import authAPI from '../apis/auth'

export default {
  name: 'SignIn',
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit (e) {
      try {
        if (!this.email || !this.password) {
          return
        }

        this.isProcessing = true

        const res = await authAPI.signIn({
          email: this.email,
          password: this.password
        })
          const { data } = res
          localStorage.setItem('token', data.token)
          this.$router.push('/walikan')
      
      }catch(error) {
        this.password = ''
        this.isProcessing = false
        console.log('error', error)
      }
    }
  }
}
</script>