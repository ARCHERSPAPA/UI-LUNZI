<template>
    <div class="popover" ref="popover">
        <div class="warp" v-if="show" ref="contentW" :class=" positions">
            <div class="warps">
                <slot name="content" :close="close"></slot>
            </div>

        </div>

        <span ref="ctr" style="display: inline-block">
      <slot></slot>
 </span>

    </div>
</template>
<script>
    export default {
        name: "popover",
        data() {
            return {
                show: false
            }
        },
        mounted() {
            if(this.trigger==='click'){
                this.$refs.popover.addEventListener('click',this.onclick)
            }else {
                this.$refs.popover.addEventListener('mouseenter',this.open)

                    this.$refs.popover.addEventListener('mouseleave',this.close())


            }

        },
        destroyed(){
            if(this.trigger==='click'){
                this.$refs.popover.removeEventListener('click',this.onclick)
            }else {
                this.$refs.popover.removeEventListener('mouseenter',this.open)
                this.$refs.popover.removeEventListener('mouseleave',this.close)
            }
        },
        // computed:{
        //     openE(){
        //         if(this.trigger==='click'){
        //             return 'click'
        //         }else {
        //             return 'mouseenter'
        //         }
        //     },
        //     closeE(){
        //         if(this.trigger==='click'){
        //             return 'click'
        //         }else{
        //             return 'mouseleave'
        //         }
        //     }
        // },
        created() {
            console.log(this.$refs);

            console.log(this.positions)
        },
        props: {
            trigger:{
               type:String,
               default:'click',
               validate(v){
                   return ['click','mouseenter'].indexOf(v)
               }
           },
            positions: [String]
        },
        methods: {
            onclick(e) {
                if (this.$refs.ctr.contains(e.target)) {
                    if (this.show === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            },
            open() {


                    this.show = !this.show
                    this.$nextTick(() => {
                        this.position()
                        document.addEventListener('click', this.eventHander)

                    })


            },
            eventHander(e) {
                console.log(this.$refs.contentW)
                console.log(this.$refs.popover.contains(e.target))
                if (this.$refs.contentW && (this.$refs.contentW.contains(e.target) || this.$refs.popover.contains(e.target))) {
                    console.log('我点的内部');
                    return
                }
                console.log('外部');

                    this.close()


            },
            close() {
                    this.show = false
                    document.removeEventListener('click', this.eventHander)


            },
            position() {
                if (this.show === true) {
                    document.body.appendChild(this.$refs.contentW)
                    let ctrResult = this.$refs.ctr.getBoundingClientRect()
                    let contentResult=this.$refs.contentW.getBoundingClientRect()
                    if (this.positions === 'top') {
                        this.$refs.contentW.style.left = ctrResult.left + window.scrollX + 'px'
                        this.$refs.contentW.style.top = ctrResult.top + window.scrollY + 'px'
                    } else if (this.positions === 'bottom') {
                        this.$refs.contentW.style.left = ctrResult.left + window.scrollX + 'px'
                        this.$refs.contentW.style.top = ctrResult.top + window.scrollY + ctrResult.height + 'px'
                    } else if (this.positions === 'left') {
                        this.$refs.contentW.style.left = ctrResult.left + window.scrollX + 'px'
                        this.$refs.contentW.style.top = ctrResult.top + window.scrollY -(contentResult.height-ctrResult.height)/2+ 'px'
                    } else if (this.positions === 'right') {
                        this.$refs.contentW.style.left = ctrResult.left + window.scrollX + ctrResult.width + 'px'
                        this.$refs.contentW.style.top = ctrResult.top + window.scrollY-(contentResult.height-ctrResult.height)/2 + 'px'
                    }
                }
            }


            // console.log(e)
            // if (this.$refs.ctr.contains(e.target)) {
            //     this.show = !this.show
            //     console.log('1' + this.show);

            //         this.$nextTick(() => {
            //             if (this.show === true) {
            //                 document.body.appendChild(this.$refs.contentW)
            //                 let ctrcomputed = this.$refs.ctr.getBoundingClientRect()
            //                 this.$refs.contentW.style.left = ctrcomputed.left + 'px'
            //                 this.$refs.contentW.style.top = ctrcomputed.top + window.scrollY + 'px'
            //                 let eventB = (g) => {
            //                     if (this.$refs.contentW && this.$refs.contentW.contains(g.target)) {
            //                         return
            //                     }
            //                     console.log('bod');
            //                     this.show = false
            //                     console.log(this.show);
            //                     document.removeEventListener('click', eventB)
            //
            //
            //                 }
            //                 document.addEventListener('click', eventB)
            //             } })


        }
    }
</script>

<style scoped lang="scss">
    $backgroundC: rgba(255, 255, 245, 1);

    .popover {
        display: inline-block;
        position: relative;

    }
@keyframes bottom{
    0%{transform: translateY(-25%);
         opacity: 0}
    100%{transform: translateY(0%);
    opacity: 1}
}
    @keyframes top{
        0%{transform: translateY(-25%);
            opacity: 0}
        100%{transform: translateY(-100%);
            opacity: 1}
    }
    @keyframes left{
        0%{transform:translateX(-75%);
            opacity: 0}
        100%{transform: translateX(-100%);
            opacity: 1}
    }
    @keyframes right{
        0%{transform: translateX(-25%);
            opacity: 0}
        100%{transform: translateX(0%);
            opacity: 1}
    }
    .warp {
        position: absolute;

        top: 100%;

        filter: drop-shadow(0 0 1px black);

        .warps {

            border: 1px solid #333333;
            border-radius: 10px;
            background: $backgroundC;
            padding: 10px;


            max-width: 300px;
            word-break: break-all;
        }


    }

    .warp.top {
        margin-top: -10px;
        transform: translateY(-100%);
        animation: top .5s;
        &::before, &::after {
            content: '';
            display: inline-block;
            width: 0px;
            height: 0px;
         border:10px solid transparent;
            position: absolute;
            left: 13px;
        }

        &::before {
            border-top-color: black;
            top: 100%;
        }

        &::after {
            border-top-color: white;
            top: calc(100% - 1.34px);
        }

    }

    .warp.bottom {
        margin-top: 10px;
        animation: bottom  .5s;
        &::before, &::after {
            content: '';
            display: inline-block;
            width: 0px;
            height: 0px;
          border: 10px solid transparent;
            position: absolute;
            left: 13px;
        }

        &::before {
            border-bottom-color: black;
            top: -20px
        }

        &::after {
            border-bottom-color: white;
            top: -19px
        }
    }


    .warp.left {

        transform: translateX(-100%);
margin-left: -10px;
        animation: left .5s;
        &::before, &::after {
            content: '';
            display: inline-block;
            width: 0px;
            height: 0px;
          border: 10px solid transparent;
          border-right: none;
            transform: rotateX(180deg);
            position: absolute;
            left: 13px;

        }

        &::before {
            border-left-color: black;
            top: 25%;
            left:100%
        }

        &::after {
            border-left-color: white;
            top: 25%;
            left:calc(100% - 1px)
        }
    }

    .warp.right {
        animation: right .5s;
        margin-top: 10px;
        margin-left:20px;
        &::before, &::after {

            content: '';
            display: inline-block;
            width: 0px;
            height: 0px;
      border: 10px solid transparent;
        border-left: none;
            position: absolute;
            left: 13px;
        }

        &::before {
            border-right-color: black;
            top:25%;
            left:-10px;
        }

        &::after {
            border-right-color: white;
            top:25%;
            left: -8px;
        }
    }


</style>