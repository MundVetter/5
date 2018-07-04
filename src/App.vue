<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcoome to Your Vue.js App"/>
    <!-- <tile class="box" :color-type=0></tile>
    <tile class="box" :color-type=1></tile>
    <tile class="box" :color-type=2></tile>
    <tile class="box" :color-type=3></tile>
    <tile class="box" :color-type=4></tile> -->
    <painting :colors=[1,2,3,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0]></painting>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tile from './components/Tile.vue'
import Painting from './components/Painting.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Tile,
    Painting
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

  .box
    width: 100px
    height: 100px
</style>
