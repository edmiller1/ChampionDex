<template>
  <div>
    <img
      :src="splashImage + champion.id + '_' + skin + '.jpg'"
      class="m-auto"
      style="height: 600px"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      splashImage: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
    };
  },
  props: ["skin", "champion"]
};
</script>

<style lang="scss" scoped>
</style>