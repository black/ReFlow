<template>
    <g class="container-svg">
        <circle class="shape" :r="radius" :cx="xpos" :cy="ypos" v-on:mouseover="hover=!hover" />
        <text class="text-xs" :x="xpos" :y="ypos" text-anchor="middle" alignment-baseline="middle">
            {{ msg }}
        </text>
        <slot v-for="anchor in anchors">
            <circle class="anchor" :r="4" :cx="anchor.x" :cy="anchor.y"
                v-on:click="anchor.selected = !anchor.selected; selectAnchor(anchor)" v-if="anchor.selected || hover" />
        </slot>
    </g>
</template>

<script>
export default {
    name: 'CircleFlow',
    props: {
        msg: String,
        xpos: Number,
        ypos: Number,
        anchorX: Number,
        anchorY:Number 
    },
    data() {
        return { 
            radius: 50,
            hover: false, 
            anchors:[] 
        }
    },
    methods: { 
        getAnchors() { 
            for (let i in [0,1,2,3]) {
                let rad = Math.PI / 2 * i
                let xx = this.xpos + this.radius * Math.cos(rad)
                let yy = this.ypos + this.radius * Math.sin(rad)
                this.anchors.push({
                    x: xx,
                    y: yy,
                    selected:false
                })
            } 
        },
        selectAnchor(anchor) {   
            this.$emit("anchorPoint", anchor)
        } 
    },
    mounted() {
        this.getAnchors() 
    } 
}
</script> 

<style scoped>
 .container-svg {
     background-color: rgba(255, 134, 229, 0.098);
     padding: 5px;
 }

 .shape {
     stroke-width: 1;
     stroke: #5900ff;
     fill: white;
 }

 .anchor{
    fill: black;
    stroke-width: 0;
    cursor: pointer;
 }
</style>
