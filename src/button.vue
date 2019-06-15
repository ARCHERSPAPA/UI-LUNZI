<template>
    <button class="g-button" :class="{[`icon-${iconposition}`]:true}" @click="x">

        <div class="content">

            <slot></slot>
        </div>
        <g-icon  name="loading" v-if="loading" class="load"> </g-icon>
        <div class="icon" v-if="!loading && icon">
            <g-icon  :name="icon" >
            </g-icon>

        </div>



    </button>
</template>

<script>
    import Icon from './icon'
    import Vue from 'vue'
    Vue.component('g-icon',Icon)
    export default {
        props: {
            icon: {},
            loading:{
              default: false

            },
            components:{
              'g-icon':Icon
            },
            iconposition: {
                type: String,
                default: "left",
                validator(value) {
                    return value === "left" || value === "right";
                }
            },

        },
        methods:{
            x(){
                this.$emit('click')

            }
        }

    }
</script>

<style lang="scss" scoped>
    @keyframes  rot {
    0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .load{
        animation: 1s rot infinite linear;
        margin-right: 0.2em;
    }
    .g-button {
        color: var(--buttonC);
        font-size: var(--buttonF);
        height: var(--buttonH);
        padding: 0 1em;
        border-radius: 10px;
        background: var(--buttonbackgroundC);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        .content {
            order: 2;


        }
        .icon {
            order: 1;

        }

        &.icon-right {
            .content {

                order: 1;

            }

            .icon {
                order: 2;

            }
        }

        &:hover {
opacity: 0.8;

        }

        &:active {
            background: snow;
        }

        &:focus {
            outline: none;
        }
    }
</style>
