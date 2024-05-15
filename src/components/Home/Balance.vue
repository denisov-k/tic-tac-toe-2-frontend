<template>
  <div id="balance">
    {{ value }} $
  </div>
</template>

<script>
  export default {
    name: "Balance",
    data: () => {
      return {
        value: 0
      }
    }
  }
</script>

<style scoped>
  #balance {
    font-size: 24px;
    font-weight: 600;
  }
</style>