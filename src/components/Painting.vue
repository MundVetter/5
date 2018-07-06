<template>
<div>
    <div class="grid">
    <tile :v-for="(color, index) in colors" :color-type="color" ></tile>
    <!-- <tile :colorType="colors[0]"  v-on:click.native="showPicker(0)"></tile>
    <tile :colorType="colors[1]"  v-on:click.native="showPicker(1)"></tile>
    <tile :colorType="colors[2]"  v-on:click.native="showPicker(2)"></tile>
    <tile :colorType="colors[3]"  v-on:click.native="showPicker(3)"></tile>
    <tile :colorType="colors[4]"  v-on:click.native="showPicker(4)"></tile>
    <tile :colorType="colors[5]"  v-on:click.native="showPicker(5)"></tile>
    <tile :colorType="colors[6]"  v-on:click.native="showPicker(6)"></tile>
    <tile :colorType="colors[7]"  v-on:click.native="showPicker(7)"></tile>
    <tile :colorType="colors[8]"  v-on:click.native="showPicker(8)"></tile>
    <tile :colorType="colors[9]"  v-on:click.native="showPicker(9)"></tile>
    <tile :colorType="colors[10]" v-on:click.native="showPicker(10)"></tile>
    <tile :colorType="colors[11]" v-on:click.native="showPicker(11)"></tile>
    <tile :colorType="colors[12]" v-on:click.native="showPicker(12)"></tile>
    <tile :colorType="colors[13]" v-on:click.native="showPicker(13)"></tile>
    <tile :colorType="colors[14]" v-on:click.native="showPicker(14)"></tile>
    <tile :colorType="colors[15]" v-on:click.native="showPicker(15)"></tile>
    <tile :colorType="colors[16]" v-on:click.native="showPicker(16)"></tile>
    <tile :colorType="colors[17]" v-on:click.native="showPicker(17)"></tile>
    <tile :colorType="colors[18]" v-on:click.native="showPicker(18)"></tile>
    <tile :colorType="colors[19]" v-on:click.native="showPicker(19)"></tile>
    <tile :colorType="colors[20]" v-on:click.native="showPicker(20)"></tile>
    <tile :colorType="colors[21]" v-on:click.native="showPicker(21)"></tile>
    <tile :colorType="colors[22]" v-on:click.native="showPicker(22)"></tile>
    <tile :colorType="colors[23]" v-on:click.native="showPicker(23)"></tile>
    <tile :colorType="colors[24]" v-on:click.native="showPicker(24)"></tile> -->
    </div>
    <color-picker class="colorPicker" :selected=color :index=index></color-picker>
</div>
</template>
<script>
import Tile from './Tile.vue'
import ColorPicker from './ColorPicker.vue'

export default {
    name: 'Painting',
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
        }
    },
    computed: {
        colors: function () {
            return this.$store.state.colors
        }
        // color: function () {
        //     return this.$store.state.colors[this.index]
        // }
    }
}
</script>

<style scoped lang="stylus">
    .grid
        display grid
        grid-template-columns 1fr 1fr 1fr 1fr 1fr
        width 500px
    
    .colorPicker
        position absolute
</style>

