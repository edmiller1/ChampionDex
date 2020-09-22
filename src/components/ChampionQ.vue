<template>
  <div class="my-2">
    <div class="flex flex-col">
      <div class="flex">
        <span>-</span>
        <span class="opacity-0">_</span>
        <span class="border-b-2 border-gray-900 text-lg">{{ champion.spells[0].name }}</span>
      </div>
      <span class="mx-3 my-2">{{ champion.spells[0].description }}</span>
      <div class="flex mx-3">
        <span class="italic text-sm">Range:</span>
        <span class="opacity-0">-</span>
        <span class="font-semibold text-sm">{{ champion.spells[0].rangeBurn }}</span>
      </div>
      <div class="flex mx-3">
        <span class="italic text-sm">Cost:</span>
        <span class="opacity-0">-</span>
        <span
          class="font-semibold text-sm"
          v-for="(cost, index) in champion.spells[0].cost"
          :key="index"
        >{{ cost }}/</span>
      </div>
      <div class="flex mx-3">
        <span class="italic text-sm">Cooldown:</span>
        <span class="opacity-0">-</span>
        <span
          class="font-semibold text-sm"
          v-for="(cooldown, index) in champion.spells[0].cooldown"
          :key="index"
        >{{ cooldown }}/</span>
      </div>
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
  },
  computed: {
    allEqual() {
      return this.champion.spells[0].cost.every(
        v => v === this.champion.spells[0].cost[0]
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>