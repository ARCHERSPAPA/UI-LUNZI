<template>
    <div class="g-button-g">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "g-button-g",
        mounted(){
            for (let node of this.$el.children){
                let name =node.nodeName.toLowerCase()
                if(name !== 'button'){
                    console.warn('你的子元素不是一个button ，请注意')
                }
            }

        }
    }
</script>

<style scoped lang="scss">
.g-button-g{
    display: inline-flex;
    vertical-align: middle;
    >.g-button{
        border-radius: 0;
        &:not(:first-child){
          margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        &:last-child{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        &:hover{
            z-index: 1;
            position: relative;
        }

    }
}
</style>