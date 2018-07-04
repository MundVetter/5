<template>
<div class="grid">
<tile :colorType="colors[0]"></tile>
<tile :colorType="colors[1]"></tile>
<tile :colorType="colors[2]"></tile>
<tile :colorType="colors[3]"></tile>
<tile :colorType="colors[4]"></tile>
<tile :colorType="colors[5]"></tile>
<tile :colorType="colors[6]"></tile>
<tile :colorType="colors[7]"></tile>
<tile :colorType="colors[8]"></tile>
<tile :colorType="colors[9]"></tile>
<tile :colorType="colors[10]"></tile>
<tile :colorType="colors[11]"></tile>
<tile :colorType="colors[12]"></tile>
<tile :colorType="colors[13]"></tile>
<tile :colorType="colors[14]"></tile>
<tile :colorType="colors[15]"></tile>
<tile :colorType="colors[16]"></tile>
<tile :colorType="colors[17]"></tile>
<tile :colorType="colors[18]"></tile>
<tile :colorType="colors[19]"></tile>
<tile :colorType="colors[20]"></tile>
<tile :colorType="colors[21]"></tile>
<tile :colorType="colors[22]"></tile>
<tile :colorType="colors[23]"></tile>
<tile :colorType="colors[24]"></tile>
</div>
</template>
<script>
import Tile from './Tile.vue'

export default {
    name: 'Painting',
    props: {
        colors: {
            type: Array,
            required: true
        }
    },
    components: {
        Tile
    }
}
</script>

<style scoped lang="stylus">
    .grid
        display grid
        grid-template-columns 1fr 1fr 1fr 1fr 1fr
        width 500px
</style>

