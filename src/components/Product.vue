<template>
    <div class="mt-5 product">
        <p>Product is {{ id }}.</p>
    </div>
</template>

<script>
export default {
    props: [
      "id",
    ]
}
</script>