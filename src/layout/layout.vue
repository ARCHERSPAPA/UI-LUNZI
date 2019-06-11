<template>
    <div>
        <div class="layout" :class="LayoutClass"></div>
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: 'layout',
        data(){
            return {
                LayoutClass:{
                    hasSider:false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                if(vm.$options.name ==='gulusider'){
                    this.LayoutClass.hasSider=true
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        display: flex;
        flex-direction: column;
        border:1px solid red;
    }
</style>