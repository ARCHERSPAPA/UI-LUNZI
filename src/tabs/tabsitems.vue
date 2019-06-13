<template>
    <div class="items" @click="act" :class="classes">
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
        data(){
          return{
              active:false
          }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        mounted: function () {
            console.log(this.eventBus);
            this.eventBus.$on('update:selected', name => {
                this.active = name === this.name;
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

<style scoped lang="scss">
.items{
    padding:1em 2em;
    border: 1px solid black;
    cursor: pointer;
   &.active{
        color: red;
    }
}
</style>