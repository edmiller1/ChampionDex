<template>
  <div>
    <h1 class="text-gray-100">Champion Abilities</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      champion: this.$route.params.champion
    };
  }
};
</script>

<style scoped>
</style>