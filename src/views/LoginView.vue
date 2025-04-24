<script setup>
import { checkLoginCredentials } from '../services/login-credentials-check.js'
import { ref } from 'vue'

const { 
  username, 
  password, 
  usernameMessage, 
  passwordMessage, 
  usernameValidity, 
  passwordValidity, 
  onSubmit
} = checkLoginCredentials()

const inputType = ref('password')
const buttonValue = ref('Show')

function passwordVisibility() {
  if (inputType.value === 'password') {
    inputType.value = 'text'
    buttonValue.value = 'Hide'
  }
  else if (inputType.value === 'text') {
    inputType.value = 'password'
    buttonValue.value = 'Show'
  }
}

// function showLocalStorage() {
//   console.log(localStorage)
// }
</script>

<template>
  <div class="login">
    <h1>This is a login page</h1>
    <div class="mb-1">
      <label class="pe-1" for="email-username">Username : </label>
      <input class="me-1" id="email-username" type="text" v-model="username" placeholder=""/>
      <span class="invalid-input" v-show="!usernameValidity">{{ usernameMessage }}</span>
    </div>
    <div class="mb-1">
      <label class="pe-1" for="password">Password : </label>
      <input class="me-1" id="password" :type="inputType" v-model="password" placeholder="" />
      <input class="me-1" type="button" :value="buttonValue" @click="passwordVisibility" />
      <span class="invalid-input" v-show="!passwordValidity">{{ passwordMessage }}</span>
    </div>
    <div class="mb-1">
      <input class="me-1" type="button" value="Login" @click="onSubmit" />
      <!-- <input type="button" value="localStorage" @click="showLocalStorage" /> -->
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pe-1 {
    padding-right: 10px;
  }
  
  .me-1 {
    margin-right: 10px;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }
  
  .invalid-input {
    color: red;
  }
}
</style>