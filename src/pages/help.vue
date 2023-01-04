<script setup>
function btnClick() {
    import('../foo').then(({ default: foo }) => foo)
}
</script>

<template>
    <button @click="btnClick">按钮</button>
    <div>
        help 2
    </div>
</template>