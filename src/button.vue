<template>
    <button class="g-button" :class="{[`icon-${icondrection}`]:true}">
        <div class="content">
            <slot></slot>
        </div>

        <svg  v-if="icon" class="icon">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>

    </button>
</template>

<script>
    export default {
props:{
    icon:{},
    icondrection:{
        type:String,
        default:'left',
        validator(v){
            return !(v !== 'left' && v !== 'right');
        }
    },

}
    }
</script>

<style  lang="scss">
    .g-button{
        font-size: var(--buttonF);
        height: var(--buttonH);
        padding: 0 1em;
        border-radius: 10px;
        background: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
            vertical-align: middle;
        .content{
            order: 2;
        }
        .icon{
            order: 1;
        }
        &.icon-right{
            .content{
                order: 1;
            }
            .icon{
                order:2
            }
        }
        &:hover{
            border-color: white;
        }
        &:active{
            background: snow;
        }
        &:focus{
            outline: none;
        }
    }
    </style>
