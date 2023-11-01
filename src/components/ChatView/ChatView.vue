<template>
  <div>
    <h1>Chat Twitch</h1>
    <div class="chatBox">
      <div class="message" v-for="(message, index) in chatMessages" :key="index">{{ message.username }}: <span v-html="message.message"/></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "./index.scss"; //Here i add extra "./"(current directory)
</style>

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

    function getMessageHTML(message, { emotes }) {
      if (!emotes) return message;

      // store all emote keywords
      // ! you have to first scan through
      // the message string and replace later
      const stringReplacements = [];

      // iterate of emotes to access ids and positions
      Object.entries(emotes).forEach(([id, positions]) => {
        // use only the first position to find out the emote key word
        const position = positions[0];
        const [start, end] = position.split("-");
        const stringToReplace = message.substring(
          parseInt(start, 10),
          parseInt(end, 10) + 1
        );

        stringReplacements.push({
          stringToReplace: stringToReplace,
          replacement: `<img alt="image" width="15" src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0">`,
        });
      });

      // generate HTML and replace all emote keywords with image elements
      return stringReplacements.reduce(
        (acc, { stringToReplace, replacement }) => {
          // obs browser doesn't seam to know about replaceAll
          return acc.split(stringToReplace).join(replacement);
        },
        message
      );
    }

    // Écouter les messages du chat
    ComfyJS.onChat = (user, message, flags, self, extra) => {
      // Ignorer les messages de l'auto-bot
      if (self) return;
      const interpretedMessage = getMessageHTML(message, {emotes: extra.messageEmotes});
      console.log(user, message, flags, self, extra);
      console.log('zzz', interpretedMessage)

      // Ajouter le message au tableau des messages du chat
      this.chatMessages.push({
        username: `${user}`,
        message: interpretedMessage
      });
    };
  },
  beforeUnmount() {
    ComfyJS.Disconnect();
  },
};
</script>
