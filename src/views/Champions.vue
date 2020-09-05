<template>
  <div class="mt-0">
    <Navigation />
    <div class="ml-8">
      <div class="flex flex-wrap mt-5 ml-32">
        <ChampionList v-for="champ in champions[0]" :key="champ.id" :champ="champ" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ChampionList from "../components/ChampionList.vue";
import Navigation from "../components/Nav.vue";
export default {
  components: {
    ChampionList,
    Navigation
  },
  data() {
    return {
      champions: [],
      spriteURL: "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/"
    };
  },
  methods: {
    getAllChampions() {
      this.$http
        .get(
          "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json"
        )
        .then(response => {
          this.champions.push(response.data.data);
          console.log(this.champions);
        })
        .error(error => {
          console.log("ERROR " + error);
        });
    }
  },
  created() {
    this.getAllChampions();
  }
};
</script>

<style scoped>
::root {
  background: #f7fafc;
}
</style>
