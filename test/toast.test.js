const expect = chai.expect;
import Vue from 'vue'
import toast from '../src/toast/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('toast', () => {
    it('存在.', () => {
        expect(toast).to.be.ok
    })

})