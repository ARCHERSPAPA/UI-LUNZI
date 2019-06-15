<template>
    <div>

        <div class="head">
            <slot></slot>
            <div class="line" ref="line"></div>
        </div>
        <div class="warp">
            <slot name="actions"></slot>
        </div>

    </div>


</template>

<script>
    export default {

        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                console.log(this);
                let{width,height,top,left}= vm.$el.getBoundingClientRect()
                this.$refs.line.style.width=`${width}px`
                this.$refs.line.style.left=`${left}px`

            })
        }
    }
</script>

<style scoped lang="scss">
    .head {
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid rgba(33,33,33,0.5);
        border-top: 1px solid rgba(33,33,33,0.5);
        margin-bottom: 20px;
     font-weight: bold;
        button{
            position: absolute;
            right: 0;
            top:10px
        }
        position: relative;
       & .line{
            border-bottom:3px solid black;
            position: absolute;
            bottom: -2px;
            left: 0;
            display: inline-block;
            width: 100px;
           transition: .5s;

        }
    }

</style>