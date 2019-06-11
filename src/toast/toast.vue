<template>

    <div class="toast">
        <slot></slot>
        <span class="line">

        </span>
        <span  v-if="closeme" @click="userclose" class=" closed">
           {{closeme.text}}
        </span>
    </div>


</template>

<script>

    export default {

        name: "toast",
        props: {
            isautoclose: {
                type: Boolean,
                default: true
            },
            times: {
                type: [Number, String],
                default: 50
            },
            closeme:{
                type:Object,
                default(){
                    return{
                    text:'关闭',callback:(toast)=>{
                        console.log(toast+'wosh');
                        toast.close()
                    }}}
            }
        },
        mounted() {
            console.log('hha');
            if (this.isautoclose) {
                setTimeout(()=> {
                    this.close()
                  console.log(this)
                }, this.times * 1000)
            }

        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            userclose(){
                this.close()
                this.closeme.callback()
            }
        }

    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $color: white;
    $backgruond-color: rgba(3, 3, 33, 0.5);
    .toast {
        font-size: $font-size;
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
        box-shadow: 0 0 10px 0.1px rgba(22, 22, 33, 0.6);
        text-align: center;
        .line{
            border:0.5px solid black;
            height: 100%;
            margin: 0 8px;
        }
        .closed{
            float: right;
        }
    }

</style>