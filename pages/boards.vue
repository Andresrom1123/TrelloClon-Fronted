<template>
  <div>
    <div class="container my-5">
      <p>
        Tableros
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'board-layout',
  middleware: 'authenticated'
}
</script>
