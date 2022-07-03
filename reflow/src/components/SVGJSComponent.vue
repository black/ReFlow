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
            attributes:{
                'fill': '#f06',
                'stroke': "grey",
                'stroke-width': 2
            } 
        };
    },
    methods: {
        drawPath() { 
            //creating canvas and starting to creating the geometry   
            var canvas = this.svg().addTo(this.$refs.mysvg).size('100%', '100%')
            console.log(canvas)
            this.svgContainer = canvas;
            canvas.rect(100, 100).attr(this.attributes)  
        }
    },
    mounted() { 
        this.drawPath()
    }
};
</script>



