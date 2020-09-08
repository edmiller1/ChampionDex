<template>
  <div>
    <div class="flex flex-col">
      <span class="text-yellow-600">Damage Composition</span>
    </div>
  </div>
</template>

<script>
import InfoChart from "../components/InfoChart.vue";
export default {
  components: {
    InfoChart
  },
  data() {
    return {
      champion: this.$route.params.champion,
      options: { responsive: true, maintainAspectRatio: false }
    };
  }
};
</script>

<style scoped>
</style>