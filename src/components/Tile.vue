<template>
    <button :class="{viewer: isViewer}" :style="{backgroundColor:color}">
        <a v-if="text">{{text}}</a>
    </button>
</template>

<script>
//              white        black     red       green        blue
const color = ["#e8e1e7", "#030216", "#bf3500", "#00d75d", "#0e28a5"];
export default {
  name: "Tile",
  props: {
    colorType: {
      type: Number,
      required: true
    },
    text: String,
    isViewer: Boolean
  },
  computed: {
    color: function() {
      return color[this.colorType];
    }
  }
};
</script>

<style scoped lang="stylus">
button {
  width: 100px;
  height: 100px;
}

a {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  font-size: 3em;
}

.viewer {
  border: 0px;
}

.viewer:focus {
  outline: none;
}

@media screen and (max-width: 700px)
  button
    width 20vmin
    height 20vmin
</style>
