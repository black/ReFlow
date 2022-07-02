<template>
    <div class="flex flex-col w-20 ml-3 py-5 h-screen justify-between absolute top-0  z-10">
        <img class="p-5" src="../assets/logo.png" alt="">
        <div class="flex flex-col bg-slate-50 rounded-full shadow-md p-2 item-center">
            <img v-for="(menu,i) in menuItems" :key="i" v-on:click="selectItem(menu)"
                class="hover:bg-purple-100 hover:rounded-full" :src="getIconPath(menu.file)" :alt="menu.name"
                srcset="" />
        </div>
        <span class="material-icons material-symbols-sharp text-center p-5 bg-slate-100 rounded-full cursor-pointer">
            settings
        </span>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        msg: String,
        xpos: Number,
        ypos: Number
    },
    data() {
        return {
            width: 100,
            height: 50,
            radius: 50,
            menuItems: [
                {
                    id:"0",
                    name:"circle",
                    file:"circle.svg"
                },
                {
                    id: "1",
                    name: "pill",
                    file: "pill.svg"
                },
                {
                    id: "2",
                    name: "decision",
                    file: "decesion.svg"
                },
                {
                    id: "3",
                    name: "rectangle",
                    file: "rectangle.svg"
                },
                {
                    id: "4",
                    name: "round rectangle",
                    file: "rounded-rectangle.svg"
                },
                {
                    id: "4",
                    name: "connection line",
                    file: "connection-line.svg"
                },
                {
                    id: "5",
                    name: "connection path",
                    file: "connection-path.svg"
                },
                {
                    id: "6",
                    name: "connection path dash",
                    file: "connection-path-dash.svg"
                }
            ] 
        }
    },
    computed: {
        widthHalf() {
            return this.width / 2
        },
        heightHalf() {
            return this.height / 2
        }
    },
    methods: {
        selectItem(item) {
            console.log(JSON.stringify(item))
        },
        getIconPath(fileName) {
            return require("@/assets/" + fileName)
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
