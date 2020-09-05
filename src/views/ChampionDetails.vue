<template>
  <div>
    <Navigation />
    <div class="mx-10 absolute z-10 flex flex-col">
      <div class="flex">
        <img
          :src="spriteURL + champion.image.full"
          class="w-32 h-32 rounded-full border-4 border-yellow-600 ml-20 my-5"
        />
        <div class="mt-8 px-10 flex flex-col">
          <span class="text-3xl text-gray-100 uppercase font-bold">{{ champion.name }}</span>
          <span class="text-xl text-yellow-600 uppercase font-semibold">{{ champion.title }}</span>
        </div>
      </div>
      <div id="tabs" class="mx-16">
        <ul class="flex text-gray-100">
          <router-link
            :to="{path: currentRoute, params:{ champion: champion }}"
            tag="li"
            class="mx-10"
          >Overview</router-link>
          <router-link
            :to="{ name: 'ChampionAbilities', params: { champion: champion } }"
            tag="li"
            class="mx-10"
          >Abilities</router-link>
          <router-link to="/builds" tag="li" class="mx-10">Builds</router-link>
          <router-link to="/skins" tag="li" class="mx-10">Skins</router-link>
        </ul>
      </div>
      <div>
        <router-view />
      </div>
    </div>
    <div class="image">
      <img :src="splashImage + champion.name + '_0.jpg'" style="height: 90vh; width: 100%;" />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/ChampionNav.vue";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      currentRoute: this.$router.history.current.path,
      name: this.$route.params.name,
      champion: "",
      splashImage:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/",
      spriteURL: "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/"
    };
  },
  methods: {
    getChampData() {
      this.$http
        .get(
          "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/" +
            this.name +
            ".json"
        )
        .then(response => {
          const obj = response.data.data;
          for (let key in obj) {
            this.champion = obj[key];
          }
        })
        .error(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.getChampData();
  }
};
</script>

<style scoped>
.image {
  position: relative;
}
.image img {
  width: 100%;
}
.image:after {
  content: "\A";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
}
</style>