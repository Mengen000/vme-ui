<template>
    <button class="vme-button" :class="[`vme-button-${type}`, {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
    }]" @click="handleClick" :disabled="disabled">
        <i v-if="icon" :class="`vme-icon-${icon}`"></i>
        <span v-if="$slots.default && icon">
            <slot></slot>
        </span>
        <span v-else-if="!icon">
            <slot>默认按钮</slot>
        </span>
    </button>
</template>
<script>
export default {
    // 唯一性
    name: 'VmeButton',
    props: {
        // 按钮类型
        type: {
            type: String,
            default: 'default'
        },
        // 是否为镂空
        plain: {
            type: Boolean,
            default: false
        },
        // 是否为圆角
        round: {
            type: Boolean,
            default: false
        },
        // 是否为圆型按钮
        circle: {
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: null
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>
<style lang="scss" scoped>
.vme-button {
    display: inline-block;
    /*变为行内块：*/
    line-height: 1;
    white-space: nowrap;
    /*规定段落中的文本不进行换行：*/
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: nvme;
    /*去除谷歌浏览器自带按钮样式：*/
    text-align: center;
    box-sizing: border-box;
    /*内边距和边框放入宽高内*/
    outline: nvme;
    /*去除按钮自带边框*/
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: nvme;
    -webkit-user-select: nvme;
    -moz-user-select: nvme;
    -ms-user-select: nvme;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

.vme-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
        background: #66b1ff;
        background-color: #66b1ff;
        color: #fff;
    }
}

.vme-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
        background: #85ce61;
        background-color: #85ce61;
        color: #fff;
    }
}

.vme-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        background: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}

.vme-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background: #ebb563;
        background-color: #ebb563;
        color: #fff;
    }
}

.vme-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        background: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}

// 朴素按钮样式
.vme-button.is-plain {

    &:hover,
    &:focus {
        background: #fff;
        border-color: #489eff;
        color: #409eff;
    }
}

.vme-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;

    &:hover,
    &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}

.vme-button-success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;

    &:hover,
    &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}

.vme-button-info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;

    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

.vme-button-warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;

    &:hover,
    &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

.vme-button-danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;

    &:hover,
    &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}

.vme-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

.vme-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}

.one-button.is-disabled {
    cursor: no-drop;
}
</style>