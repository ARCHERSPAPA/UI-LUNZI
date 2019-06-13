<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import  Vue from 'vue'
    export default {
props:{

    selected:{
        type:String,
        required:true
    },
    direction:{
        type: String,
        default:'henzhede',
        validator(key){
             return ['henzhede','vertical'].indexOf(key)>=0
        }
    },

},
        methods:{

        },
        data(){
    return{
        eventBus:new Vue(),

    }

        },
        created(){
                this.$emit('nimasile:cao')
        },
        provide(){
return {eventBus:this.eventBus}
        }
    }
</script>

<style scoped lang="scss">
.tabs{

}
</style>