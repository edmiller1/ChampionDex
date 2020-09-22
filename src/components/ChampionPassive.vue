<template>
  <div class="my-2">
    <div class="flex flex-col">
      <div class="flex">
        <span>-</span>
        <span class="opacity-0">_</span>
        <span class="border-b-2 border-gray-900 text-lg">{{ champion.passive.name }}</span>
      </div>
      <span class="mx-3 my-2">{{ champion.passive.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    champion: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>