<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ChatView msg="Welcome to Your Vue.js App"/>
</template>

<script>
import ChatView from './components/ChatView/ChatView.vue'

export default {
  name: 'App',
  components: {
    ChatView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
