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
          <div class="mt-10 mb-5 border-b-2 border-yellow-600">
            <span class="text-yellow-600">Base Statistics</span>
          </div>
          <div class="flex">
            <div>
              <ul>
                <li class="my-2">
                  <i class="fas fa-heart fill-current text-green-600 fa-lg"></i>
                  <span class="opacity-0">_</span>
                  <span class="text-gray-100">- {{ champion.stats.hp }} Health</span>
                </li>
                <li class="my-2">
                  <i class="fas fa-heart fill-current text-blue-600 fa-lg"></i>
                  <span class="opacity-0">_</span>
                  <span class="text-gray-100">- {{ champion.stats.mp }} Mana</span>
                </li>
                <li class="my-2">
                  <i class="fas fa-shield-alt fill-current text-red-600 fa-lg"></i>
                  <span class="opacity-0">_</span>
                  <span class="text-gray-100">- {{ champion.stats.armor }} Armour</span>
                </li>
                <li class="my-2">
                  <i class="fas fa-shield-alt fill-current text-blue-600 fa-lg"></i>
                  <span class="opacity-0">_</span>
                  <span class="text-gray-100">- {{ champion.stats.spellblock }} Magic Resist</span>
                </li>
              </ul>
            </div>
            <div class="ml-20">
              <ul>
                <li class="my-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      stroke-miterlimit="10"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode:normal"
                    >
                      <path d="M0 172V0h172v172z" />
                      <path
                        d="M148.73 14.396a9.133 9.133 0 0 0-2.317.273l-26.98 6.754a16.135 16.135 0 0 0-8.574 5.389L58.061 90.493l23.446 23.446 63.8-52.791a16.377 16.377 0 0 0 5.431-8.658l6.6-26.945a8.934 8.934 0 0 0-2.394-8.517 8.94 8.94 0 0 0-6.215-2.632zM41.207 86c-1.375 0-2.75.525-3.8 1.575a5.373 5.373 0 0 0 0 7.6l10.288 10.288-17.266 18.323 17.784 17.784 18.323-17.266 10.288 10.288a5.356 5.356 0 0 0 3.8 1.575 5.35 5.35 0 0 0 3.8-1.575 5.373 5.373 0 0 0 0-7.6L45.01 87.574a5.358 5.358 0 0 0-3.8-1.575zm-21.5 39.417a5.373 5.373 0 0 0-3.8 9.175l21.5 21.5a5.356 5.356 0 0 0 3.8 1.575 5.35 5.35 0 0 0 3.8-1.575 5.373 5.373 0 0 0 0-7.6l-21.5-21.5a5.358 5.358 0 0 0-3.8-1.575z"
                        fill="#f7fafc"
                      />
                    </g>
                  </svg>
                  <span class="text-gray-100">- {{ champion.stats.attackdamage }} Attack Damage</span>
                </li>
                <li class="my-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      stroke-miterlimit="10"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode:normal"
                    >
                      <path d="M0 172V0h172v172z" />
                      <path
                        d="M28.577 17.122a5.734 5.734 0 0 0-5.644 5.811c0 5.948 2.72 10.527 5.924 13.303l9.182 73.47 10.269-10.28-7.413-59.293h22.172c23.016 0 37.524 11.123 43.65 17.055L43.56 120.4H33.415a11.47 11.47 0 0 0-8.108 3.36l-13.84 13.84 22.978.034-.045 22.9 13.863-13.864a11.463 11.463 0 0 0 3.36-8.062l.033-10.09 63.167-63.223c5.935 6.131 17.044 20.635 17.044 43.638v22.172l-59.193-7.402-10.257 10.28 73.347 9.16c2.776 3.203 7.355 5.924 13.303 5.924a5.734 5.734 0 1 0 0-11.467c-4.137 0-4.365-1.068-5.04-2.475-.674-1.407-.694-3.023-.694-3.023V108.933c0-26.53-13.218-44.017-20.48-51.667l13.067-13.079 7.413 7.413 5.734-28.667-28.667 5.734 7.413 7.413-13.068 13.079C107.1 41.898 89.61 28.667 63.067 28.667H39.898s-1.616-.02-3.023-.695c-1.407-.674-2.475-.902-2.475-5.039a5.734 5.734 0 0 0-5.823-5.811z"
                        fill="#d69e2e"
                      />
                    </g>
                  </svg>
                  <span class="opacity-0">_</span>
                  <span class="text-gray-100">- {{ champion.stats.attackspeed }} Attack Speed</span>
                </li>
                <li class="my-2">
                  <i class="fas fa-running fill-current text-orange-600 fa-lg"></i>
                  <span class="opacity-0">_</span>
                  <span class="text-gray-100">- {{ champion.stats.movespeed }} Movement Speed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex justify-center">
          <InfoChart :chartData="champion" :options="options" class="w-1/2" />
        </div>
      </div>
    </div>
    <div class="image">
      <img :src="splashImage + id + '_0.jpg'" style="height: 90vh; width: 100%;" />
    </div>
    <div class="flex">
      <div class="w-1/2">
        <ChampionAbilities :champion="champion" />
      </div>
      <div class="w-1/2">
        <ChampionBuilds :champion="champion" />
      </div>
    </div>
    <div id="championSkins" class="mx-24 m-auto border-2 border-gray-900 rounded-lg mb-40">
      <div class="px-5 py-3">
        <span class="uppercase text-xl border-b-2 border-blue-600">Skins</span>
      </div>
      <div class>
        <img :src="splashImage + id + '_' + champion.skins[0].num + '.jpg'" />
      </div>
      <div class="flex">
        <carousel-3d height="95" width="200">
          <slide v-for="(skin, index) in champion.skins" :key="index" :index="index">
            <img :src="splashImage + id + '_' + skin.num + '.jpg'" class="bg-gray-900 h-24" />
          </slide>
        </carousel-3d>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/ChampionNav.vue";
import InfoChart from "../components/InfoChart.vue";
import ChampionAbilities from "../views/ChampionAbilities.vue";
import ChampionBuilds from "../views/ChampionBuilds.vue";
export default {
  components: {
    Navigation,
    InfoChart,
    ChampionAbilities,
    ChampionBuilds
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