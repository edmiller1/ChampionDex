<template>
  <div id="builds">
    <div class="my-10 pr-24 pl-5">
      <div class="px-5 py-3 rounded-lg border-gray-900 border-2">
        <span class="uppercase text-xl border-b-2 border-blue-600">Build</span>
        <div class="mt-3 flex items-center">
          <span>Starting</span>
          <span>{{ champion.recommended[5].blocks[0].items[0].id -1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      startingItems: []
    };
  },
  props: {
    champion: {
      type: Object,
      required: true
    }
  },
  methods: {
    getItemData() {
      this.$http
        .get(
          "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/item.json"
        )
        .then(response => {
          this.items.push(response.data.data);
          console.log(this.items);
        })
        .error(error => {
          console.log("ERROR " + error);
        });
    },
    getStartingItems() {
      let self = this;
      for (
        var i = 0;
        i < self.champion.recommended[4].blocks[0].items.length;
        i++
      ) {
        this.startingItems.push(
          self.champion.recommended[4].blocks[0].items[i]
        );
      }
    }
  },
  mounted() {
    this.getItemData();
    this.getStartingItems();
  }
};
</script>

<style lang="scss" scoped>
</style>