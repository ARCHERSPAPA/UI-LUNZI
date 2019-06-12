import  toast from './toast/toast'
function createtoast({Vue,message,toastoption}) {
    var constructor = Vue.extend(toast)
    var tos =new constructor({
        propsData:toastoption

    })
    tos.$slots.default=[message]
    tos.$mount()
    console.log(tos);
    document.body.appendChild(tos.$el)
    return tos
}
let current

export  default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,data) {
if(current){
    current.close()
    current=''
}
    current= createtoast({Vue,message,toastoption:data})


        }
    }
}