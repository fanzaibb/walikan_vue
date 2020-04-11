<template>
  <div class="row">
    <form @submit.prevent.stop="handleSubmit" class="form-signup mt-4 pt-2 mb-0" action="/signup" method="POST">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3">Sign Up</h1>
      </div>
      <div class="form-label-group row ">
        <label for="name" class="col-12 col-sm-3 h5">Name</label>
        <input type="text" name="name" class="col-12 col-sm-6 form-control bg-transparent" required autofocus>
      </div>
      <div class="form-label-group row ">
        <label for="email" class="col-12 col-sm-3 h5">Email</label>
        <input type="email" name="email" class="col-12 col-sm-6 form-control bg-transparent" required autofocus>
      </div>
      <div class="form-label-group row ">
        <label for="password" class="col-12 col-sm-3 h5">Password</label>
        <input type="password" name="password" class="col-12 col-sm-6 form-control bg-transparent" required>
      </div>
      <div class="form-label-group row ">
        <label for="passwordCheck" class="col-12 col-sm-3 h5">Confirm Password</label>
        <input type="password" name="passwordCheck" class="col-12 col-sm-6 form-control bg-transparent" required>
      </div>
      <div class='form-label-group' style="width: 50%;">
        <button class="btn btn-secondary btn-block" type="submit">Sign Up</button>
      </div>
      <div class="text-center mb-4 mt-3">
        <p><router-link href="/signin">Already have one, back to sign in!</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */ 
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
      }
    },
    methods: {
      handleSubmit (e) {
        const data = JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })

        console.log('data', data)
      }
    }
  }
</script>

