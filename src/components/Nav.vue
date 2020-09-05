<template>
  <div class="w-full shadow-2xl bg-white">
    <div class="flex justify-between items-center py-3">
      <div class="mx-10">
        <input
          class="w-64 h-10 px-3 py-1 rounded-full bg-gray-200 text-lg focus:outline-none"
          placeholder="Search..."
        />
        <div class="flex">
          <i class="fas fa-search"></i>
        </div>
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
::placeholder {
  color: #718096;
  opacity: 1;
}

.fas {
  position: absolute;
  color: #0275d8;
  top: 30px;
  left: 265px;
}

input {
  transition: 0.1s ease;
}

input:focus {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>