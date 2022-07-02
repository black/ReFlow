<template>
    <div class="bg-white rounded-lg shadow-xl m-5 absolutee absolute top-0 left-1/2 z-10">
        <span class="cursor-pointer py-4 px-6 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            v-for="(icon,i) in icons" :key="i" :class="icon.style" v-on:click="itemClicked(i)">{{icon.name}}</span>
    </div>
</template>

<script>

export default {
    name: 'CustomizeFlow',
    props: {
        msg: String, 
    },
    data() {
        return {
            icons: [
                {
                    name: "circle",
                    style: "material-icons border-r"
                },
                {
                    name: "circle",
                    style: "material-icons-outlined border-r"
                },
                {
                    name: "text_format",
                    style: "material-icons border-r"
                }, {
                    name: "text_fields",
                    style: "material-icons"
                }]
        }
    },
    computed: {
        checkIndex(index) {
            return (0<index && index<this.icons.length-1)?true:false
        }
    },
    methods: {
        itemClicked(i) {
            console.log("index", i)
        }
    }
}
</script>   