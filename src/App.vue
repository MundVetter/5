<template>
  <div id="app">
    <!-- <tile class="box" :color-type=0></tile>
    <tile class="box" :color-type=1></tile>
    <tile class="box" :color-type=2></tile>
    <tile class="box" :color-type=3></tile>
    <tile class="box" :color-type=4></tile> -->
    <painting :colors=[1,2,3,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0]></painting>
  </div>
</template>

<script>
import Tile from './components/Tile.vue'
import Painting from './components/Painting.vue'

export default {
  name: 'app',
  components: {
    Tile,
    Painting
  }
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
  background linear-gradient(to right, #2c3e50, #818c98, #2c3e50)

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  display flex
  justify-content center
  padding 100px
</style>
