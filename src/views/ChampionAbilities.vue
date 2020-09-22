<template>
  <div id="abilities">
    <div class="pl-24 pr-5 my-10">
      <div class="px-5 py-3 rounded-lg border-gray-900 border-2">
        <span class="uppercase text-xl border-b-2 border-blue-600">Abilities</span>
        <div class="mt-3 flex items-center">
          <div class="mt-3 flex">
            <router-link :to="{ name: 'Passive', params: {champion: champion} }">
              <img :src="passiveURL + champion.passive.image.full" class="w-10 h-10 mx-3 mb-1" />
            </router-link>
            <router-link :to="{ name: 'Q', params: {champion: champion} }">
              <img :src="abilityURL + champion.spells[0].id + '.png'" class="w-10 h-10 mx-3 mb-1" />
            </router-link>
            <router-link :to="{ name: 'W', params: {champion: champion} }">
              <img :src="abilityURL + champion.spells[1].id + '.png'" class="w-10 h-10 mx-3 mb-1" />
            </router-link>
            <router-link :to="{ name: 'E', params: {champion: champion} }">
              <img :src="abilityURL + champion.spells[2].id + '.png'" class="w-10 h-10 mx-3 mb-1" />
            </router-link>
            <router-link :to="{ name: 'R', params: {champion: champion} }">
              <img :src="abilityURL + champion.spells[3].id + '.png'" class="w-10 h-10 mx-3 mb-1" />
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <span class="mx-6 w-8 text-lg">P</span>
          <span class="pl-2 w-8 text-lg">Q</span>
          <span class="mx-5 pl-4 w-8 text-lg">W</span>
          <span class="mx-5 pl-4 w-8 text-lg">E</span>
          <span class="ml-3 pl-4 w-8 text-lg">R</span>
        </div>
        <div>
          <router-view />
        </div>
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
  data() {
    return {
      abilityURL: "http://ddragon.leagueoflegends.com/cdn/10.18.1/img/spell/",
      passiveURL: "http://ddragon.leagueoflegends.com/cdn/10.18.1/img/passive/"
    };
  }
};
</script>

<style scoped>
.router-link-active {
  border-bottom: solid 2px #d69e2e;
}
</style>