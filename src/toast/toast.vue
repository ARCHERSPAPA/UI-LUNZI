<template>
<div class="all" :class="toastpostion">
    <div class="toast":class="`position-${toastpostion}`">

        <div class="content">
            <slot v-if="!enablehtml"></slot>
            <div  v-else v-html="$slots.default[0]"></div>
        </div>


        <span class="line">

        </span>
        <span v-if="closeme" @click="userClose" class=" closed">
           {{closeme.text}}
        </span>
    </div>

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
            },
            enablehtml:{
                type:Boolean
            },
            toastpostion:{
                type:String,
                default:'bottom'
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
            // this.$nextTick(()=>{
            //     setTimeout(()=>{
            //         console.log(this.$refs)
            //         this.$refs.line.style.height=`${this.$refs.content.getBoundingClientRect().height}px`
            //     },2000)
            //
            // })

        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            userClose(){
                this.close()
                if(this.closeme && typeof this.closeme.callback === 'function'){
                    this.closeme.callback()
                    //可以传值返回
                }

            }
        }

    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $color: white;
    $backgruond-color: rgba(3, 3, 33, 0.5);
    $height-min:30px;
    @keyframes fadein {
        0%{ transform: translateY(100%)}
        100%{transform: translateY(0)}
    };
    @keyframes fadeinTop {
        0%{ transform: translateY(-50%)}
        100%{transform: translateY(0%)}
    };
    @keyframes fadeinMid{
        0%{ ;
        opacity: 0}
        100%{;
        opacity: 1}
    };
    .all{
        position: fixed;
        transform: translate(-50%);

        left: 50%;
        &.top{
            top:0
        }
        &.bottom{
                bottom:0
            }
        &.middle{
            top:50%
        }
    }
    .toast {

        font-size: $font-size;
        width: 200px;
        min-height: $height-min;
        display: flex;
        flex-wrap: wrap;

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
            position: absolute;
            left: 140px;
        }
        .closed{
            float: right;
        }
        .content{
            width: 150px;
        }
    }

    .position-bottom{
border-bottom-radius: 0;
        animation: 1s fadein;
    }
    .position-top{
        border-top-radius: 0;
          animation: 1s fadeinTop;
      }
    .position-middle{

        animation: 1s fadeinMid;
    }

</style>