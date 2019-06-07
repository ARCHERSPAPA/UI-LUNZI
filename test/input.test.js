const expect = chai.expect;
import Vue from 'vue'
import input from '../src/input/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
    it('存在.', () => {
        expect(input).to.be.ok
    })
 it('接受value',()=>{
     const  constructor =Vue.extend(input)
     const vm =new constructor({
         propsData:{
  value:'2323'
         }

     }).$mount()
     console.log(vm)
     console.log(vm.$el)
  const  inputvalue =vm.$el.querySelector('input')
     expect(inputvalue.value).to.eq('2323')
     vm.$destroy()
 })
    it('接受disable',()=>{
        const  constructor =Vue.extend(input)
        const vm =new constructor({
            propsData:{
                disabled:true
            }

        }).$mount()
        console.log(vm)
        console.log(vm.$el)
        const  inputdisabled =vm.$el.querySelector('input')
        expect(inputdisabled .disabled).to.eq(true)
        vm.$destroy()
    })
    it('接受readnoly',()=>{
        const  constructor =Vue.extend(input)
        const vm =new constructor({
            propsData:{
               readonly:true
            }

        }).$mount()
        console.log(vm)
        console.log(vm.$el)
        const  inputoy =vm.$el.querySelector('input')
        expect(inputoy .readOnly).to.eq(true)
        vm.$destroy()
    })
    // describe('事件',()=>{
    //     const  consturstor=Vue.extend(input)
    //     let vm
    //     afterEach(()=>{
    //         vm.$destroy()
    //     })
    //     it('change，input，focus事件正常'),()=>{
    //         ['change','input','focus'].forEach((names) =>{
    //             vm =new consturstor({}).$mount()
    //             const callback=sinon.fake()
    //             vm.$on(eventname,callback)
    //             let event =new Event(eventname)
    //             let  inoutelment=vm.$el.querySelector('input')
    //             inoutelment.dispatchEvent(event)
    //             console.log(vm)
    //             expect(callback).to.have.been.calledWith(event)
    //         })
    //
    //     }
    // })

})