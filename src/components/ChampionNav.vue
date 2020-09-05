<template>
  <div class="w-full shadow-2xl bg-white">
    <div class="flex justify-between items-center py-3">
      <div class="mx-10">
        <router-link to="/champions">
          <i class="fas fa-chevron-left text-xl"></i>
        </router-link>
      </div>
      <div class="mx-10">
        <router-link
          to="/champions"
          tag="span"
          class="text-gray-600 text-4xl cursor-pointer"
        >ChampionDex</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fas {
  color: #1a202c;
  cursor: pointer;
}
</style>