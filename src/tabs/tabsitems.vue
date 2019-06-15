<template>
    <div class="items" @click="act" :class="classes" >
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name: 'items',
        inject: ['eventBus'],
        props: {
            disabled: {
                type: Boolean,
                default:false
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
                    active:this.active,
                    disabled: this.disabled
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
                // console.log('点了'+this.name)
if(!this.disabled){
    this.eventBus.$emit('update:selected',this.name,this)
}else return

            }
        }
    }
</script>

<style scoped lang="scss">
.items{
    padding:1em 2em;
display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

&.active{
    color: skyblue;
}
 &.disabled{
      cursor: not-allowed;
  }
}
</style>