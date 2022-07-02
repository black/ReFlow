<template>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" :view-box.camel="viewbox">
    <g v-for="(item, i) in items" :key="i">
      <CircleFlow v-if="item.type == 'circle'" :xpos="item.x" :ypos="item.y" :msg="item.msg" @anchorPoint="updateParent"/>
      <RectFlow v-if="item.type=='rect'" :xpos="item.x" :ypos="item.y" :msg="item.msg" />
      <RectRoundFlow v-if="item.type=='rect-round'" :xpos="item.x" :ypos="item.y" :msg="item.msg" />
      <RectPillFlow v-if="item.type =='rect-pill'" :xpos="item.x" :ypos="item.y" :msg="item.msg" />
      <PathFlow v-if="item.anchors.length>0" :xstart="item.anchors[0].x" :ystart="itemanchors[0].y"
        :xend="itemanchors[1].x" :yend="itemanchors[1].y" :msg="item.msg" />
    </g>
  </svg> -->
  <CustomizeFlow />
  <SVGJSComponent />
  <Sidebar />
</template>

<script>
// import CircleFlow from './components/CircleFlow.vue'
// import RectFlow from './components/RectFlow.vue'
// import RectRoundFlow from './components/RectRoundFlow.vue'
// import RectPillFlow from './components/RectPillFlow.vue'
// import PathFlow from './components/PathFlow.vue'
import CustomizeFlow from './components/CustomizeFlow.vue' 
import SVGJSComponent from './components/SVGJSComponent.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    // CircleFlow,
    // RectFlow,
    // RectRoundFlow,
    // RectPillFlow,
    // PathFlow,
    CustomizeFlow,
    SVGJSComponent,
    Sidebar
  },
  data() {
    return {
      size: 1920,
      currentAnchor:[],
      items: [
        {
          type:"circle",
          x: 100,
          y: 100,
          msg: "Hello 1 ",
          anchors:[]
        },
        {
          type: "circle",
          x: 260,
          y: 260,
          msg: "Hello 2",
          anchors: []
        },
        {
          type: "rect",
          x: 300,
          y: 400,
          msg: "World",
          anchors: []
        },
        {
          type: "rect-round",
          x: 500,
          y: 200,
          msg: "People",
          anchors: []
        },
        {
          type: "rect-pill",
          x: 600,
          y: 350,
          msg: "Person",
          anchors: []
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
    }, 
  },
  methods: {  
    updateParent(anchor) { 
      console.log("child Anchor",anchor)
      this.currentAnchor = anchor
    },
    setAnchors(i) {
      console.log(i)
     // items.anchors[].push(i)
    }
  }
}
</script>
<style>
.custom-size {
  width: 100px; 
}
</style>
