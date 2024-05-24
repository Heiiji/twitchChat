<template>
  <ChatView msg="Welcome to Your Vue.js App" />
</template>

<script>
import ChatView from "./components/ChatView/ChatView.vue";

export default {
  name: "App",
  components: {
    ChatView,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: rgb(61, 53, 157);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
