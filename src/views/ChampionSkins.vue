<template>
  <div id="championSkins" class="mx-24 m-auto border-2 border-gray-900 rounded-lg mb-40">
    <div class="px-5 py-3">
      <span class="uppercase text-xl border-b-2 border-blue-600">Skins</span>
    </div>
    <div>
      <router-view />
    </div>
    <div>
      <carousel-3d height="95" width="200">
        <slide v-for="(skin, index) in champion.skins" :key="index" :index="index">
          <div v-if="skin">
            <router-link :to="{ name: 'SkinSplash', params: {skin: skin.num, champion: champion} }">
              <img
                :src="splashImage + champion.id + '_' + skin.num + '.jpg'"
                class="bg-gray-900 h-24"
              />
            </router-link>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      splashImage: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
    };
  },
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