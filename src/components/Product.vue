<template>
    <div class="mt-5 product">
        <p>Product is {{ name }} with id: {{ id }}.</p>
    </div>
</template>

<script>
export default {
    props: [
      "id",
      "name",
    ]
}
</script>