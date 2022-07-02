<template>
    <g class="container-svg" v-on:click="toggleClass()">
        <!-- 
            something 
            <path d="M x0,y0 C x1,y1 x2,y2 x3,y3" />
            where :
            C = Cubic Bezier
            x0,y0 = starting point 
            x3,y3 = end point
            x1,y1 = contorl point 
            x2,y2 = control point        
        -->
        <path class="shape" :class="{ pathAnim: isActive }" stroke-dasharray="5,5" stroke-linecap="butt"
            :d="curveShape" />
        <text class="text-xs" text-anchor="middle" :x="(xstart+xend)/2" :y="(ystart + yend) / 2">
            {{ msg }}
        </text>
    </g>
</template>

<script>
export default {
    name: 'CircleFlow',
    props: {
        msg: String,
        xstart: Number,
        ystart: Number,
        xstartControl: {
            type: Number,
            default:0
        },
        ystartControl: {
            type: Number,
            default: 0
        },
        xend: Number,
        yend: Number,
        xendControl: {
            type: Number,
            default: 100
        }, 
        yendControl: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isActive:false,
            radius: 50,
        }
    },
    computed: {
        curveShape() {
            return 'M'+ this.xstart + ',' + this.ystart + ' C' + this.xstartControl + ',' + this.ystartControl + ' ' + this.xendControl + ',' + this.yendControl + ' ' + this.xend + ',' + this.yend
        }
    },
    methods: {
        toggleClass() {
            /*
             You need to click on the path
            */
            console.log("clicked")
            this.isActive = !this.isActive
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

.pathAnim{
    animation: dash 5s linear infinite;
}

@keyframes dash {
    to {
        stroke-dashoffset: 0;
    }
    from {
        stroke-dashoffset: 100;
    }
}
 
</style>
