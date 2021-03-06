import Vue from 'vue'
import ButtonS from './button'
import Icon from './icon'
import buttong from './g-button-g'
import inputI from './input/input'
import row from './fence/row'
import col from './fence/col'
import layout from './layout/layout'
import Content from './layout/content'
import sider from './layout/sider'
import header from './layout/header'
import footer from './layout/footer'
import toast from './toast/toast'
import plug from './plugin'
import tabs from './tabs/tabs'
import tabsBody from './tabs/tabsbody'
import tabsHead from './tabs/tabshead'
import tabsItems from './tabs/tabsitems'
import tabsPanel from './tabs/tabspanel'
import popover from './popover/popover'

Vue.use(plug)

Vue.component('g-button', ButtonS)
Vue.component('g-icon', Icon)
Vue.component('buttongroup', buttong)
Vue.component('g-input', inputI)
Vue.component('g-row', row)
Vue.component('g-col', col)
Vue.component('g-content', Content)
Vue.component('g-header', header)
Vue.component('g-footer', footer)
Vue.component('g-sider', sider)
Vue.component('g-layout', layout)
Vue.component('g-toast', toast)
Vue.component('g-tabs', tabs)
Vue.component('g-tabsbody',tabsBody)
Vue.component('g-tabshead',tabsHead)
Vue.component('g-tabspanel',tabsPanel)
Vue.component('g-tabsitems',tabsItems)
Vue.component('g-popover',popover)



new Vue({
    el: '#app',
    data: {
        isload: false,
        isload1: false,
        isload2: false,
        value1: 'haha',
        selectedTab:'meinv'
    },
    methods: {
        inputchange(eventValue) {
            console.log(`mess is ${this.mess}`)
            this.mess = eventValue
        },
        showtoast() {
            this.$toast('niansdsadsadmds  dasndkjasdaslkm dasndkjasdaslkm', {
                closeme: {
                    text: '好的', callback() {
                        console.log('你好我也好')
                    },

                },
                toastpostion: 'bottom'
            })

        },
        showtoast1() {
            this.$toast('niansdsadsadmds  dasndkjasdaslkm dasndkjasdaslkm', {
                closeme: {
                    text: '好的', callback() {
                        console.log('你好我也好')
                    },                },
                toastpostion: 'top',
                times:10
            })

        },
        showtoast2() {
            this.$toast(`我操你吗的${parseInt(Math.floor(Math.random() * 100))}`, {
                closeme: {
                    text: '好的', callback() {
                        console.log('你好我也好')
                    },

                },
                toastpostion: 'middle'
            })

        },
        mabi(){
            console.log('wohaikeyi')    }

    },
    created() {
        this.$toast('<i>xixi</i>', {
            closeme: {
                text: '好的', callback() {
                    console.log('你好我也好')
                }
            },
            enablehtml: true,

        })

    }

})
//单元测试
import modetest from 'chai'
import spy from 'chai-spies'

modetest.use(spy)
const expect = modetest.expect


// {
//     const constructor = Vue.extend(ButtonS)
//     const button = new constructor(
//         {
//             propsData: {
//                 icon: 'you'
//             }
//         })
//     button.$mount('#test')
//     let useelment = button.$el.querySelector('use')
//     expect(useelment.getAttribute('xlink:href')).to.eq("#icon-you")
//
//     button.$el.remove()
//     button.$destroy()
// }
// //事件测试
// {
//     const constructor = Vue.extend(ButtonS)
//     const gbutton = new constructor(
//         {
//             propsData: {
//                 icon: 'you'
//             }
//         })
//     gbutton.$mount()
//     let spy= modetest.spy(function(){
//
//     })
//     gbutton.$on('click',spy)
//     let useelment = gbutton.$el
//
//    useelment.click()
//     expect(spy).to.have.been.called()
//     console.log(useelment)
//     gbutton.$el.remove()
//     gbutton.$destroy()
// }
// {
//  const div = document.createElement('div')
//     document.body.appendChild(div)
//     const constructor=Vue.extend(ButtonS)
//     const vm=new constructor({
//         propsData:{
//             icon:'you',
//             icondrection:'right'
//         }
//     })
//     vm.$mount(div)
//     let svg= vm.$el.querySelector('svg')
//     let{order}=window.getComputedStyle(svg)
//     console.log(order)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }