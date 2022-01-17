<template>
<img :src="imgUrl" :alt="name" :title="name" width="200">
</template>

<script>
export default {
  name: 'Bind',
  data() {
    return {
        name: 'S.Mario',
        imgUrl: 'https://www.seekpng.com/png/detail/3-38549_super-mario-png.png',
    };
  },
};
</script>

<style></style>
