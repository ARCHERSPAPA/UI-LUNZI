<template>
    <div>

        <div class="head">
            <slot></slot>
            <div class="line" ref="line"></div>
            <div class="actions-wrapper ">
                <slot name="actions"></slot>
            </div>

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
        display: inline-flex;
        justify-content: flex-start;
        border-bottom: 1px solid rgba(33,33,33,0.5);
        border-top: 1px solid rgba(33,33,33,0.5);
        margin-bottom: 20px;
     font-weight: bold;
        width: 100%;

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
        .actions-wrapper {
            margin-left: auto;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 1em;

        }
    }


</style>