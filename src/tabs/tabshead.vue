<template>
    <div>

        <div class="head">
            <slot></slot>
        </div>
        <div class="warp">
            <slot name="actions"></slot>
        </div>

    </div>


</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .head {
        display: flex;
        justify-content: flex-start;
        button:last-child{
            position: absolute;
            right: 0;
        }
    }

</style>