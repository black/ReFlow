<template>
    <g class="container-svg"> 
        <rect class="shape" :x="xpos" :y="ypos" :width="width" :height="height" />
        <text class="text-xs text-center" :x="xpos+widthHalf" :y="ypos+heightHalf" text-anchor="middle"
            alignment-baseline="middle">
            {{ msg }}
        </text>
    </g>
</template>

<script>
export default {
    name: 'CircleFlow',
    props: {
        msg: String,
        xpos: Number,
        ypos: Number
    },
    data() {
        return {
            width: 100,
            height:50,
            radius: 50,
        }
    },
    computed: {
        widthHalf() {
            return this.width/2
        },
        heightHalf() {
            return this.height/2
        }
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
    stroke: #fac504;
    fill: none;
}
</style>
