<template>
  <div>
    <h1>Chat Twitch</h1>
    <div>
      <div v-for="(message, index) in chatMessages" :key="index">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import ComfyJS from 'comfy.js';

export default {
  data() {
    return {
      chatMessages: [],
      channel: 'heiji_misaki', // Remplacez par le nom de la chaîne que vous souhaitez écouter
    };
  },
  mounted() {
    ComfyJS.Init(this.channel);

    // Écouter les messages du chat
    // eslint-disable-next-line
    ComfyJS.onChat = (user, message, flags, self, extra) => {
      // Ignorer les messages de l'auto-bot
      if (self) return;

      // Ajouter le message au tableau des messages du chat
      this.chatMessages.push(`${user}: ${message}`);
    };
  },
  beforeUnmount() {
    ComfyJS.Disconnect();
  },
};
</script>
