<template>
  <div class="message">
    <span :style="{ color: userColor }" class="pseudo">{{ username }}</span
    >: <span v-html="message" />
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
export default {
  props: {
    username: String,
    message: String,
    userColor: String,
  },
  data() {
    return {
      chatMessages: [],
      channel: "heiji_misaki", // Remplacez par le nom de la chaîne que vous souhaitez écouter
    };
  },
  mounted() {
    console.log("userColor", this.userColor);
  },
  beforeUnmount() {},
};
</script>
