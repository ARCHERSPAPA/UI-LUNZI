<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="x">

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
            iconPosition: {
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

<style lang="scss">
    @keyframes  rot {
    0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .load{
        animation: 1s rot infinite linear;
        margin-right: 0.2em;
    }
    .g-button {
        font-size: var(--buttonF);
        height: var(--buttonH);
        padding: 0 1em;
        border-radius: 10px;
        background: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        .content {
            order: 2;
            height: 24px;
            margin-left:0.5em ;
        }
        .icon {
            order: 1;

        }

        &.icon-right {
            .content {
                height: 24px;
                order: 1;

            }

            .icon {
                order: 2;
                margin-left: 0;
                margin-left:0.5em ;
            }
        }

        &:hover {
            border-color: white;
        }

        &:active {
            background: snow;
        }

        &:focus {
            outline: none;
        }
    }
</style>
