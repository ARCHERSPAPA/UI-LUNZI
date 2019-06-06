<template>

<div class="inputS">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event,'made')"
           @input="$emit('change',$event,'in')"
           @focus="$emit('change',$event,'fo')">


    </input>
    <template>
        <g-icon v-if="erro" :name="iconname"></g-icon>
        <span v-if="erro">你输入的{{VAL}}有误</span>
    </template>
</div>

</template>

<script>
import  Icon from '../icon'
import Vue from 'vue'
Vue.component('g-icon',Icon)
    export default {
    components:{
    Icon
    },
        name: "input",
        props:{
            disabled:false,
            value:{
                type:String,
                default:'gaga'
            },
            erro:{
                type: Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default: false
            },
            iconname:{
                type:String,

            },
            VAL:{
                type:String,
            }
        }
    }
</script>

<style scoped lang="scss">
    $height:32px;
    $borderC:#999;
    $boderFC:#aaa;
    .inputS{
        display: inline-block;
    }
    input{
        height: $height;
        border:1px solid $borderC;
        border-radius: 2px;
padding: 0.5em;
        &[disabled]{
         cursor: help;
    }
        &[readonly]{
            cursor: zoom-in;
        }
        &:hover{
            border:1px solid rgba($borderC,0.5);
        }
        &:focus{
            outline: none;
            box-shadow: 1px 1px 4px 3px $boderFC;}
    }

</style>