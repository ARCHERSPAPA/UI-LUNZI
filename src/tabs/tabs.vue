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
        },
        mounted () {
            if (this.$children.length === 0) {
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'head') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'items'
                            && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped lang="scss">
.tabs{

}
</style>