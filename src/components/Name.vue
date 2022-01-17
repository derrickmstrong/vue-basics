<template>
    <div class="mb-5 name">
        <p>Hi, my name is {{firstName}}.</p>
    </div>
</template>

<script>
export default {
    name: 'Name',
    props: {
        firstName: String
    }
}
</script>

<style scoped>
.name {
    background-color: pink;
}
</style>