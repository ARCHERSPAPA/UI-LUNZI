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
  const  inputvalue =vm.querySelector('input')
     expect(inputvalue.value).to.eq('2323')
 })
})