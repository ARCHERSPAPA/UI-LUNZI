<template>
    <div class="panel">
<slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'panel',
              inject:['eventBus'],
      created() {
          this.eventBus.$on('update:selected',name=>{
              console.log('这里是panle'+name);
          })
      },
        props:{
          name:{
              type:String
          }
        },

        methods:{

        }
    }


</script>

<style scoped lang="scss">

</style>