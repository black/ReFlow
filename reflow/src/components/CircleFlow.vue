<template>
    <g class="container-svg">
        <circle class="shape" :r="radius" :cx="xpos" :cy="ypos" />
        <text class="text-xs text-center" text-anchor="middle" :x="xpos" :y="ypos">
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
            radius:50, 
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
     stroke: #AE8EE9;
     fill: none;
 }
</style>
