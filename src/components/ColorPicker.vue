<template>
    <div class="colorPicker">
        <tile class="prev" :color-type="color" text="ColorPicker™" :is-viewer=true></tile>
        <div class="options">
            <tile :color-type=0 v-on:click.native="update(0)" text="1"></tile>
            <tile :color-type=1 v-on:click.native="update(1)" text="2"></tile>
            <tile :color-type=2 v-on:click.native="update(2)" text="3"></tile>
            <tile :color-type=3 v-on:click.native="update(3)" text="4"></tile>
            <tile :color-type=4 v-on:click.native="update(4)" text="5"></tile>
        </div>
    </div>
</template>

<script>
import Tile from "./Tile.vue";

export default {
  name: "ColorPicker",
  props: {
    index: Number
  },
  methods: {
    update: function(num) {
      console.log(this.index);
      this.$store.commit({
        type: "setColor",
        colorType: num,
        index: this.index
      });
    }
  },
  components: {
    Tile
  },
  computed: {
    color: function() {
      return this.$store.state.colors[this.index];
    }
  },
  mounted: function() {
    window.addEventListener("keydown", event => {
      if (isNaN(event.key)) return;

      const colorType = parseInt(event.key) - 1;
      if (colorType < 0 || colorType > 4) return;

      this.$store.commit()
    });
  }
};
</script>

<style scoped lang="stylus">
.colorPicker {
    background-color: #030216;
}

.prev {
    width: 500px;
}

a {
    background-color: white;
}

.options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 500px;
}
</style>

