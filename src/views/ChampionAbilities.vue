<template>
  <div>
    <h1 class="text-gray-100">Champion Abilities</h1>
    <span class="text-gray-100">{{ champion.name }}</span>
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

<style lang="scss" scoped>
</style>