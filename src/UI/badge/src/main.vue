<template>
    <div class="lu_badge is_relative">
        <slot></slot>
        <sup 
            class="is_absolute"
            :style="{ backgroundColor: color }"
            v-if="!hidden"
            :class="[
                isDot?'lu_badge_isDot':''
            ]"
            v-text="isDot?'':value"
        >
        </sup>
    </div>
</template>

<script>
export default {
    name: 'lu_badge',
    props:{
        value:[String,Number],
        isDot:{
            type: Boolean,
            default: false
        },
        hidden:{
            type: Boolean,
            default: false
        },
        color: String,
    }
}
</script>