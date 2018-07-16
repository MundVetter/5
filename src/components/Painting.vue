<template>
<div>
    <div class="grid">
    <tile v-for="{color, id} in colors"
        :key="id" :color-type="color"
        @click.native.passive="showPicker(id)"
        @keydown.up.native="move('up', id)"
        @keydown.down.native="move('down', id)"
        @keydown.left.native="move('left', id)"
        @keydown.right.native="move('right', id)"
        @keydown.tab.native="move('right', id)"
        @keydown.shift.tab.native="move('left', id)"
        @keydown.space.prevent.native
        v-focus="id == index"></tile>
    </div>
    <color-picker class="colorPicker" :selected=color :index=index></color-picker>
</div>
</template>
<script>
import Tile from './Tile.vue'
import ColorPicker from './ColorPicker.vue'
import { focus } from 'vue-focus'

export default {
  name: 'Painting',
  directives: {focus},
  data: function () {
    return {
      color: 0,
      index: 0
    }
  },
  components: {
    Tile,
    ColorPicker
  },
  methods: {
    showPicker: function (index) {
      this.color = this.colors[index]
      this.index = index
    },
    move: function name (direction, index) {
      if (direction === 'up') index -= 5
      else if (direction === 'down') index += 5
      else if (direction === 'left') index -= 1
      else if (direction === 'right') index += 1

      index = (index < 0) ? 25 + index : index % 25
      this.showPicker(index)
    }
  },
  computed: {
    colors: function () {
      return this.$store.state.colors.map((color, id) => ({ color, id }))
    }
  }
}
</script>

<style scoped lang="stylus">
.grid
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr 1fr
  width 500px

.colorPicker
  margin-top 20px

@media screen and (max-width: 700px)
  .grid
    width 100vmin
    height 100vmin
</style>
