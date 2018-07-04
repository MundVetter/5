<template>
    <div v-bind:style="{backgroundColor:color}"></div>
</template>

<script>
//                red        blue      green       black     white
const color = ['#bf3500', '#0e28a5', '#0d773b', '#030216', '#e8e1e7']
export default {
    name: 'Tile',
    props: {
        colorType: {
            type: Number,
            required: true
        }
    },
    computed: {
        color: function () {
            return color[this.colorType]
        }
    }
}
</script>

<style scoped lang="stylus">
  div
    width 100px
    height 100px
</style>
