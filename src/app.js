import Vue from 'vue'
import  ButtonS from './button'
import  Icon from './icon'
import  buttong  from './g-button-g'
Vue.component('g-button',ButtonS )
Vue.component('g-icon',Icon)
Vue.component('buttongroup',buttong)
new Vue({
    el:'#app',
    data:{
            isload:false,
        isload1:false,
        isload2:false
        }

})