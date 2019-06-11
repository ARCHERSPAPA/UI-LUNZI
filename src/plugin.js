import  toast from './toast/toast'
export  default {
    install(Vue,options){
        Vue.prototype.$toast=function (message) {

            var constructor = Vue.extend(toast)
            var tos =new constructor()
            tos.$slots.default=[message]
            tos.$mount()
            console.log(tos.$el);
            document.body.appendChild(tos.$el)
        }
    }
}