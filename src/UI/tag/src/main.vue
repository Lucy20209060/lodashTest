<template>
    <transition :name="closeTransition ? '' : 'lu-zoom-in-center'">
        <span
            class="lu_tag"
            :class="[type ? 'lu_tag_' + type : '', {'is-hit': hit}]"
            :style="{backgroundColor: color}"
        >
            <!-- <em> -->
            <slot></slot>
            <!-- </em> -->
            <i class="lu_tag_close lu_icon_close iconfont lu-icon-delete"
                v-if="closable"
                @click="handleClose"
            ></i>
        </span>
    </transition>
</template>

<script>
    export default {
        name: 'lu_tag',
        props: {
            text: String,
            closable: Boolean,
            type: String,
            hit: Boolean,
            closeTransition: Boolean,
            color: String
        },
        methods: {
            handleClose(event) {
                this.$emit('close', event);
            }
        }
    }
</script>

<style scoped>
    .lu_tag{
        background-color: #8391a5;
        display: inline-block;
        padding: 0 5px;
        height: 24px;
        line-height: 22px;
        font-size: 12px;
        color: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid transparent;
        white-space: nowrap;
    }
    .lu_tag_gray{
        background-color: #e4e8f1;
        border-color: #e4e8f1;
        color: #48576a;
    }
    .lu_tag_primary {
        background-color: rgba(32,160,255,.1);
        border-color: rgba(32,160,255,.2);
        color: #20a0ff;
    }
    .lu_tag_success {
        background-color: rgba(18,206,102,.1);
        border-color: rgba(18,206,102,.2);
        color: #13ce66;
    }
    .lu_tag_warning {
        background-color: rgba(247,186,41,.1);
        border-color: rgba(247,186,41,.2);
        color: #f7ba2a;
    }
    .lu_tag_danger {
        background-color: rgba(255,73,73,.1);
        border-color: rgba(255,73,73,.2);
        color: #ff4949;
    }
    .lu_tag_close{
        border-radius: 50%;
        text-align: center;
        position: relative;
        cursor: pointer;
        font-size: 18px;
        transform: scale(.75);
        height: 18px;
        width: 18px;
        line-height: 18px;
        vertical-align: middle;
        top: -1px;
        right: -2px;
    }
    .lu_tag_close:hover{
        background-color:#fff;
        color:#8391a5
    }
    .lu_tag_gray .lu_tag_close:hover{
        background-color:#48576a;
        color:#fff
    }
    .lu_tag_primary .lu_tag_close:hover{
        background-color:#20a0ff;
        color:#fff
    }
    .lu_tag_success .lu_tag_close:hover{
        background-color:#13ce66;
        color:#fff
    }
    .lu_tag_warning .lu_tag_close:hover{
        background-color:#f7ba2a;
        color:#fff
    }
    .lu_tag_danger .lu_tag_close:hover{
        background-color:#ff4949;
        color:#fff
    }
</style>
