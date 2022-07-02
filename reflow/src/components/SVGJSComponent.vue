<template>
    <div class="bg-purple-100 h-screen">
        <div ref="test"></div> 
        <a
            href="https://gojs.net/latest/index.html?gclid=CjwKCAjw2f-VBhAsEiwAO4lNeNT8OvEwsKhJT5RaNr-SeuDBmR6aI62rUQHBlhqwgWcLMtmCRNvs2RoCrQEQAvD_BwE">GOJS</a>
    </div>
</template>

<script>

//import panZoom from "svg.panzoom.js";

import {
    SVG
} from '@svgdotjs/svg.js'
export default {
    name: "TestSVG",
    install: Vue => {
        Vue.prototype.$svg = SVG
    },
    data() {
        return {
            size: 600,
            shoulder: 1,
            radiusShift: 2
        };
    },
    mounted: function () {
        this.$nextTick(function () {
            this.drawPath();
        });
    },
    methods: {
        drawPath() {
            var stroke = { color: "grey", width: 5 };
            var sH = this.size / 2,
                shoulder = (this.size / 4) * this.shoulder;
            var preRadius = shoulder * this.radiusShift - shoulder;
            var Radius = Math.sqrt(
                preRadius * preRadius + (sH - shoulder) * (sH - shoulder)
            );
            var q = sH - preRadius;
            var radiusX = sH + Math.sqrt(Radius * Radius - (sH - q) * (sH - q));
            var radiusXtwo = radiusX - (radiusX - sH) * 2;
            var d = [
                "M",
                radiusXtwo,
                this.size,
                "A",
                Radius,
                Radius,
                0,
                0,
                1,
                radiusX,
                this.size
            ].join(" ");

            //creating canvas and starting to creating the geometry
            var canvas = SVG("test")
                .size(800, 800)
                .panZoom({ zoomMin: 0.2, zoomMax: 20 }),
                circle = canvas
                    .path(d)
                    .fill("none")
                    .stroke(stroke),
                lineR = canvas
                    .line(radiusX, this.size, this.size, this.size)
                    .stroke(stroke),
                lineL = canvas.line(0, this.size, radiusXtwo, this.size).stroke(stroke);
            var group = canvas.group();
            group.add(circle);
            group.add(lineR);
            group.add(lineL); 
            group.rotate(90, sH, sH);
            var cloneGs = group.clone();
            cloneGs.rotate(180, sH, sH);
            var cloneGth = group.clone();
            cloneGth.rotate(270, sH, sH);
            canvas.ungroup();
        }
    }
};
</script>

 