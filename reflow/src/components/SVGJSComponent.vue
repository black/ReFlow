<template>
    <div class="bg-purple-100 h-screen">
        <div id="mysvg" ref="mysvg" class="svg-container"></div>
    </div>
</template>

<script> 
export default {
    name: "MySVG", 
    data() {
        return { 
            size: 600, 
            svgContainer: null
        };
    },
    methods: {
        drawPath() {
            var attributes = {
                fill: '#f06',
                stroke: {
                    color: "grey",
                    width: 5
                }
            }
            //creating canvas and starting to creating the geometry   
            var canvas = this.svg().addTo(this.$refs.mysvg).size('100%', '100%')
            console.log(canvas)
            this.svgContainer = canvas;
            canvas.rect(100, 100).attr(attributes)  
        }
    },
    mounted() { 
        this.drawPath()
    }
};
</script>



