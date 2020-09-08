<template>
  <router-link
    :to="{ name: 'ChampionDetails', params: { id: champ.id } }"
    tag="div"
    class="champBox w-1/6 border-2 border-gray-300 rounded-lg pt-5 pb-10 px-10 my-2 mx-2 shadow-lg"
  >
    <img
      :src="spriteURL + champ.image.full"
      class="m-auto w-20 h-20 rounded-full border-4 border-yellow-600 shadow-2xl"
    />
    <span class="pt-5 flex justify-center font-semibold text-lg">{{ champ.name }}</span>
    <span class="flex justify-center text-center text-sm my-3">{{ champ.title }}</span>
  </router-link>
</template>

<script>
export default {
  name: "ChampionList",
  props: {
    champ: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      spriteURL: "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/"
    };
  }
};
</script>
<style scoped>
.champBox {
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.champBox:hover {
  /*background-color: #cbd5e0;*/
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>;
