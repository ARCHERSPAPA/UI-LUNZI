<template>

        <div class="toast">
            <slot></slot>
        </div>




</template>

<script>

    export default {

        name: "toast"

    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $color:white;
    $backgruond-color:rgba(3,3,33,0.6 );
    .toast {
        font-size:  $font-size;
        width: 100px;
        height: 30px;
        display: flex;
        position: absolute;
        transform: translate(-50%);
        top: 2px;
        left: 50%;
   border: 1px solid #333;
        border-radius: 3px;
        align-items: center;
        justify-content: center;
        background: $backgruond-color;
        color: $color;
        box-shadow: 0 0 10px 0.1px rgba(22,22,33,0.6)
    }

</style>