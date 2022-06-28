<template>
    <g class="container-svg">
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
        <path class="shape" stroke-dasharray="5,5" stroke-linecap="butt" :d="curveShape" />
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
            radius: 50,
        }
    },
    computed: {
        curveShape() {
            return 'M'+ this.xstart + ',' + this.ystart + ' C' + this.xstartControl + ',' + this.ystartControl + ' ' + this.xendControl + ',' + this.yendControl + ' ' + this.xend + ',' + this.yend
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
