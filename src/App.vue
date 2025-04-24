<!--
script setup
- added all statements after the first 2 lines
HTML template
- added (div class="header-part theme-toggle") tag
- added (div class="header-part") tag
- added (RouterLink to="/login") tag
CSS
- changed (header) selector into (header .header-part) at @media (min-width: 1024px)
- added another (header) selector at @media (min-width: 1024px)
- added (header .theme-toggle) at @media (min-width: 1024px)
-->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { changeTheme } from './services/theme-change.js'

// Composable for changing theme
const { theme, setTheme } = changeTheme()
</script>

<template>
  <header>
    <div class="header-part theme-toggle">
      <input type="button" :value="`${theme} Theme`" @click="setTheme" />
    </div>
    <div class="header-part">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
  
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  header .header-part {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  
  header .theme-toggle {
    justify-content: end;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
