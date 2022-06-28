<template>
    <g class="container-svg">
        <rect class="shape" :x="xpos" :y="ypos" :width="rectWidth" :height="height" rx="10" /> 
        <textPath xlink:href="#path1">This is a long long long text ......</textPath>
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
    stroke: #0015ff;
    fill: none;
}
</style>
