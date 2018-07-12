<template>
  <div id="app">
    <painting></painting>
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
  },
  mounted: function () {
    const hash = window.location.hash
    if(hash) {
      const words = hash.slice(1).split('-')
      this.$store.commit('setWords', words)
    }
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
