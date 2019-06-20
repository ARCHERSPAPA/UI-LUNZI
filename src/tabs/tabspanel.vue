<template>
    <div class="panel" :class="classes">
<slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'panel',
              inject:['eventBus'],
     mounted() {
          this.eventBus.$on('update:selected',name=>{
              if(name === this.name){
                  this.active=true
              }else {
                  this.active=false
              }
          })
      },
        computed:{
          classes(){
              return {
                  active:this.active
              }
          }
        },
        data(){
           return{
               active:false
           }
        },
        props:{
          name:{
              type:String
          }

        },


    }


</script>

<style scoped lang="scss">
.panel{
    display: none;
    color: white;
    padding: 30px;
    &.active{
       background: rgba(33,33,33,0.9);
        display: block;
        filter: blur();
        box-shadow: 1px 1px 10px 1px white;
    }

}
</style>