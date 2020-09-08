<template>
  <div>
    <Navigation />
    <div class="absolute z-10 flex flex-col">
      <div class="flex">
        <img
          :src="spriteURL + champion.image.full"
          class="w-32 h-32 rounded-full border-4 border-yellow-600 ml-20 my-5"
        />
        <div class="mt-8 px-10 flex flex-col">
          <div class="flex items-center">
            <img :src="require(`../assets/images/${champion.tags[0]}.png`)" class="w-10 h-10" />
            <span class="text-3xl text-gray-100 uppercase font-bold px-2">{{ champion.name }}</span>
          </div>
          <span class="text-xl text-yellow-600 uppercase font-semibold">{{ champion.title }}</span>
        </div>
      </div>
      <div id="Main" class="flex">
        <div class="w-1/3 ml-24 mt-16">
          <p class="text-gray-100">{{ champion.lore }}</p>
        </div>
        <div class="w-1/2 flex justify-center">
          <InfoChart :chartData="champion" :options="options" class="w-1/2" />
        </div>
      </div>
    </div>
    <div class="image">
      <img :src="splashImage + id + '_0.jpg'" style="height: 90vh; width: 100%;" />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/ChampionNav.vue";
import InfoChart from "../components/InfoChart.vue";
export default {
  components: {
    Navigation,
    InfoChart
  },
  data() {
    return {
      id: this.$route.params.id,
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
            this.id +
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
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
</style>