<template>
    <g class="container-svg">
        <rect class="shape" :x="xpos" :y="ypos" :width="rectWidth" :height="rectHeight" :rx="rectCorner" />
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
            width: 150,
            height: 50,
            radius: 50,
        }
    },
    computed: {
        rectWidth() {
            return this.width 
        },
        rectHeight() {
            return this.height
        },
        rectCorner() {
            return this.height/2
        },
        widthHalf() {
            return this.width / 2
        },
        heightHalf() {
            return this.height / 2
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
    stroke: #ff0051;
    fill: none;
}
</style>
