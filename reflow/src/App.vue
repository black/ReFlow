<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <svg xmlns="http://www.w3.org/2000/svg" :view-box.camel="viewbox" class="container-svg">
    <g v-for="(item,i) in items" :key="i">
      <CircleFlow v-if="item.type=='circle'" :xpos="item.x" :ypos="item.y" :msg="item.msg" />
      <RectFlow v-if="item.type=='rect'" :xpos="item.x" :ypos="item.y" :msg="item.msg" />
      <RectRoundFlow v-if="item.type=='rect-round'" :xpos="item.x" :ypos="item.y" :msg="item.msg" />
      <PathFlow :xstart="item.x" :ystart="item.y" :xend="item.x" :yend="item.y" />
    </g>
  </svg>

</template>

<script>
import CircleFlow from './components/CircleFlow.vue'
import RectFlow from './components/RectFlow.vue'
import RectRoundFlow from './components/RectRoundFlow.vue'
import PathFlow from './components/PathFlow.vue'


export default {
  name: 'App',
  components: {
    CircleFlow,
    RectFlow,
    RectRoundFlow,
    PathFlow
  },
  data() {
    return {
      size: 1000,
      items: [
        {
          type:"circle",
          x: 100,
          y: 100,
          msg:"Hello"
        },
        {
          type: "rect",
          x: 300,
          y: 400,
          msg: "World"
        },
        {
          type: "rect-round",
          x: 500,
          y: 200,
          msg: "People"
        }
        ],
      captureToggle: false,
      x: 0,
      y: 0
    }
  },
  computed: { 
    viewbox() {
      return "0 0 " + this.size + " " + this.size;
    }
  },
  methods: {
    mo: function (evt) {
      if (this.captureToggle) {
        this.x = evt.x
        this.y = evt.y
      }
    },
    captureOn: function () {
      this.captureToggle = true
    },
    captureOff: function () {
      this.captureToggle = false
    }
  }
}
</script>
<style>
.custom-size {
  width: 100px; 
}
</style>
