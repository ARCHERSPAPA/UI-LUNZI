<template>
    <div class="items" @click="act">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'items',
        inject: ['eventBus'],
        props: {
            disabled: {
                type: Boolean
            },
            name: {
                type: [String, Number],
                           }
        },
        created() {
            console.log(this.eventBus);
            this.eventBus.$on('update:selected',name=>{
                console.log(name);
            })
        },
        methods:{
            act(){
                console.log('点了'+this.name)
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped>

</style>